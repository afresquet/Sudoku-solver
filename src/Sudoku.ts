import Cell from "./Cell";
import { Neighbors } from "./Neighbors";

export default class Sudoku {
	private grid: Cell[];

	private box = new Array<Cell[]>(9).fill([]);
	private row = new Array<Cell[]>(9).fill([]);
	private column = new Array<Cell[]>(9).fill([]);

	private emptyCells: Cell[] = [];

	constructor(template: string) {
		this.makeGrid(template);

		this.setCellsNeighbors();
	}

	solve(previousEmptyCells: number = this.emptyCells.length): number[][] {
		this.setEmptyCells();

		if (this.emptyCells.length === 0) {
			if (!this.finalCheck()) {
				throw new Error("It's incorrect.");
			}

			return this.makeDisplay();
		} else if (this.emptyCells.length === previousEmptyCells) {
			throw new Error("Could not solve it.");
		}

		this.emptyCells.forEach(cell => cell.checkPossibilities());
		this.emptyCells.forEach(cell => cell.checkUniqueness());

		return this.solve(this.emptyCells.length);
	}

	private makeGrid(template: string) {
		this.grid = template.split("").map((number, index) => {
			const value = parseInt(number, 10);
			const row = Math.floor(index / 9);
			const column = index % 9;
			const box = Math.floor(row / 3) * 3 + Math.floor(column / 3);

			const cell = new Cell(value, row, column, box);

			Neighbors.forEach(position => this[position][cell[position]].push(cell));

			return cell;
		});
	}

	private makeDisplay() {
		function* slices(values: number[]) {
			for (let i = 0; i < values.length; i += 9) {
				yield values.slice(i, i + 9);
			}
		}

		return [...slices(this.grid.map(cell => cell.number))];
	}

	private setCellsNeighbors() {
		this.grid.forEach(cell => cell.setNeighbors(this.grid));
	}

	private setEmptyCells() {
		this.emptyCells = this.grid.filter(cell => cell.number === 0);
	}

	private finalCheck() {
		return Neighbors.every(position => {
			return this[position].every(
				group =>
					[1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
						number => !group.find(neighbor => number === neighbor.number)
					).length === 0
			);
		});
	}
}
