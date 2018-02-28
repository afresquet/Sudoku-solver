import Vec from "./Vec";

export default class Cell {
	/**
	 * @description A Sudoku cell entity.
	 * @param {number} value Cell's value.
	 * @param {number} x Cell's column
	 * @param {number} y Cell's row
	 */
	constructor(value, x, y) {
		this.value = value;
		this.pos = new Vec(x, y);
		this.neighbors = {
			row: [],
			column: [],
			box: []
		};
		this.possibilities = [];
	}

	/** @description Check the cell's neighbor's values to get its possibilities. */
	checkPossibilities() {
		const permanentNeighbors = Object.values(this.neighbors).reduce(
			(acc, axis) => [
				...acc,
				...axis.filter(cell => cell.number !== 0).map(cell => cell.number)
			],
			[]
		);

		this.possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
			number => !permanentNeighbors.find(neighbor => number === neighbor)
		);
	}

	/** @description Compare the cell's possibilities with its empty neigbors to find a unique one. */
	checkUniqueness() {
		if (this.possibilities.length === 1) {
			[this.number] = this.possibilities;
			return;
		}

		const neighborsPossibilities = {};

		Object.keys(this.neighbors).forEach(axis => {
			neighborsPossibilities[axis] = this.neighbors[axis].reduce(
				(acc, neighbor) =>
					neighbor.number === 0 ? acc.concat(neighbor.possibilities) : acc,
				[]
			);
		});

		this.possibilities.forEach(possibility => {
			const results = Object.values(neighborsPossibilities).map(
				axis => !axis.find(neighborPos => possibility === neighborPos)
			);

			if (results.find(unique => unique)) this.number = possibility;
		});
	}

	/** @param {number} value Cell's value */
	set number(value) {
		this.value = value;
		this.possibilities.length = 0;

		Object.values(this.neighbors).forEach(neighbors => {
			neighbors.forEach(neighbor => {
				if (neighbor.value === 0) neighbor.checkPossibilities();
			});
		});
	}

	/** @returns {number} Cell's value */
	get number() {
		return this.value;
	}

	/**
	 * @description Set the cell's neighbors.
	 * @param {Array.<Cell>} sudoku Grid to compare the cell against.
	 */
	setNeighbors(sudoku) {
		["row", "column", "box"].forEach(prop => {
			this.neighbors[prop] = sudoku.filter(
				cell =>
					this.pos[prop] === cell.pos[prop] &&
					!(
						this.pos.row === cell.row &&
						this.pos.column === cell.column &&
						this.pos.box === cell.box
					)
			);
		});
	}
}
