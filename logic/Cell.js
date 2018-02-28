import Vec from "./Vec";

/** A Sudoku cell entity. */
export default class Cell {
	/**
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

	/** Check the cell's neighbor's values to get its possibilities. */
	checkPossibilities() {
		const permanentNeighbors = Object.keys(this.neighbors).reduce(
			(acc, axis) =>
				acc.concat(
					this.neighbors[axis]
						.filter(cell => cell.number !== 0)
						.map(cell => cell.number)
				),
			[]
		);

		this.possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
			num => !permanentNeighbors.find(neighbor => num === neighbor)
		);
	}

	/** Compare the cell's possibilities with its empty neigbors to find a unique one. */
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
			const results = Object.keys(neighborsPossibilities).map(
				axis =>
					!neighborsPossibilities[axis].find(
						neighborPos => possibility === neighborPos
					)
			);

			if (results.find(unique => unique)) this.number = possibility;
		});
	}

	get number() {
		return this.value;
	}

	set number(num) {
		this.value = num;
		this.possibilities.length = 0;

		Object.keys(this.neighbors).forEach(neighbors => {
			this.neighbors[neighbors].forEach(neighbor => {
				if (neighbor.value === 0) neighbor.checkPossibilities();
			});
		});
	}

	/**
	 * Set the cell's neighbors.
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
