import { Neighbor, Neighbors } from "./Neighbors";

interface INeighbors {
	[Neighbor.BOX]: Cell[];
	[Neighbor.ROW]: Cell[];
	[Neighbor.COLUMN]: Cell[];
}

export default class Cell {
	neighbors: INeighbors = {
		[Neighbor.BOX]: [],
		[Neighbor.ROW]: [],
		[Neighbor.COLUMN]: [],
	};

	possibilities: number[] = [];

	constructor(
		private value: number,
		public readonly row: number,
		public readonly column: number,
		public readonly box: number
	) {}

	get number(): number {
		return this.value;
	}

	set number(value: number) {
		this.value = value;

		this.possibilities.length = 0;

		Neighbors.forEach(position => {
			this.neighbors[position].forEach(neighbor => {
				if (neighbor.value === 0) neighbor.checkPossibilities();
			});
		});
	}

	setNeighbors(grid: Cell[]) {
		Neighbors.forEach(position => {
			this.neighbors[position] = grid.filter(cell => {
				if (this === cell) return false;

				return this[position] === cell[position];
			});
		});
	}

	checkPossibilities() {
		const permanentNeighbors = Neighbors.reduce<number[]>(
			(acc, position) => [
				...acc,
				...this.neighbors[position]
					.filter(cell => cell.number !== 0)
					.map(cell => cell.number),
			],
			[]
		);

		this.possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
			number => !permanentNeighbors.includes(number)
		);
	}

	checkUniqueness() {
		if (this.possibilities.length === 1) {
			this.number = this.possibilities[0];

			return;
		}

		const neighborsPossibilities = Neighbors.reduce<{
			[position: string]: number[];
		}>((result, position) => {
			return {
				...result,
				[position]: this.neighbors[position].reduce<number[]>(
					(acc, neighbor) =>
						neighbor.number === 0 ? acc.concat(neighbor.possibilities) : acc,
					[]
				),
			};
		}, {});

		this.possibilities.forEach(possibility => {
			const results = Neighbors.map(
				position => !neighborsPossibilities[position].includes(possibility)
			);

			if (results.includes(true)) {
				this.number = possibility;
			}
		});
	}
}
