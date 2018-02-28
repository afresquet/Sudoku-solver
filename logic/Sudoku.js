import Cell from "./Cell";

export default class Sudoku {
	/**
	 * @description Sudoku instance.
	 * @param {string} template Sudoku to resolve in a string with its values from left to right and top to bottom.
	 */
	constructor(template) {
		this.template = template;
		this.grid = Sudoku.createGrid(template);
	}

	/** @description Solving algorithm. */
	algorithm() {
		this.setEmptyCells();

		if (this.emptyCells.length === 0) {
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
	 * @description Make a grid with the template values as its cells.
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
	 * @description Make a 2D array to display the sudoku.
	 * @param {Array.<Cell>} grid Array of cells.
	 * @returns {Array.<Array.<number>>} 2D array.
	 */
	static makeDisplay(grid) {
		function* slices(values) {
			for (let i = 0; i < values.length; i += 9) yield values.slice(i, i + 9);
		}

		return [...slices(grid.map(cell => cell.number))];
	}

	/** @description Check to test if the solved sudoku is correct. */
	finalCheck() {
		return Object.values(this.axes).every(axis =>
			axis.every(
				group =>
					[1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
						num => !group.find(neighbor => num === neighbor)
					).length === 0
			)
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

	/** @description Set emptyCells property to all empty cells in the grid. */
	setEmptyCells() {
		this.emptyCells = this.grid.filter(cell => cell.number === 0);
	}
}
