// @ts-check

import isEmpty from "lodash/isEmpty";
import Cell from "./Cell";

/** Sudoku instance. */
export default class Sudoku {
	/**
	 * @param {string} template Sudoku to resolve in a string with its values from left to right and top to bottom.
	 */
	constructor(template) {
		this.template = template;
		this.grid = Sudoku.createGrid(template);
	}

	/** Solving algorithm. */
	algorithm() {
		this.setEmptyCells();

		if (isEmpty(this.emptyCells)) {
			if (!this.finalCheck()) return "it's wrong";

			return Sudoku.makeDisplay(this.grid);
		}
		if (this.emptyCells.length === this.prevEmptyCells)
			return "can't be solved";

		this.emptyCells.forEach(cell => cell.checkPossibilities());
		this.emptyCells.forEach(cell => cell.checkUniqueness());

		this.prevEmptyCells = this.emptyCells.length;

		return this.algorithm();
	}

	/**
	 * Make a grid with the template values as its cells.
	 * @param {string} template Sudoku template.
	 */
	static createGrid(template) {
		const grid = template
			.split("")
			.map(
				(value, i) => new Cell(parseInt(value, 10), i % 9, Math.floor(i / 9))
			);

		grid.forEach(cell => cell.setNeighbors(grid));

		return grid;
	}

	/**
	 * Make a 2D array to display the sudoku.
	 * @param {Array.<Cell>} grid Array of cells
	 */
	static makeDisplay(grid) {
		const display = [];
		const values = grid.map(cell => cell.number);

		for (let i = 0; i < grid.length; i += 9)
			display.push(values.slice(i, i + 9));

		return display;
	}

	/** Check to test if the solved sudoku is correct. */
	finalCheck() {
		return Object.keys(this.axes).reduce(
			(correct, axis) =>
				correct &&
				this.axes[axis].reduce((check, group) => {
					const missing = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
						num => !group.find(neighbor => num === neighbor)
					);

					return check && isEmpty(missing);
				}, true),
			true
		);
	}

	get axes() {
		const axes = {
			row: [[], [], [], [], [], [], [], [], []],
			column: [[], [], [], [], [], [], [], [], []],
			box: [[], [], [], [], [], [], [], [], []]
		};

		this.grid.forEach(cell =>
			["row", "column", "box"].forEach(prop =>
				axes[prop][cell.pos[prop]].push(cell.number)
			)
		);

		return axes;
	}

	/** Set emptyCells property to all empty cells in the grid. */
	setEmptyCells() {
		this.emptyCells = this.grid.filter(cell => cell.number === 0);
	}
}
