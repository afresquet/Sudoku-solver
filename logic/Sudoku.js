import isEmpty from "lodash/isEmpty";
import Cell from "./Cell";

export default class Sudoku {
  constructor(template) {
    this.template = template;
    this.grid = this.create();
  }

  algorithm() {
    this.setEmptyCells();

    if (isEmpty(this.emptyCells)) {
      if (!this.finalCheck()) return "it's wrong";

      return this.display;
    }
    if (this.emptyCells.length === this.prevEmptyCells)
      return "can't be solved";

    this.emptyCells.forEach(cell => cell.checkPossibilities());
    this.emptyCells.forEach(cell => cell.checkUniqueness());

    this.prevEmptyCells = this.emptyCells.length;

    return this.algorithm();
  }

  create() {
    const grid = this.template.split("").map((number, i) => {
      const row = (i / 9) | 0;
      const column = i % 9;
      
      return new Cell(parseInt(number, 10), row, column);
    });

    
    grid.forEach(cell => cell.setNeighbors(grid));

    return grid;
  }

  get display() {
    const display = [];
    const values = this.grid.map(cell => cell.number);

    for (let i = 0; i < this.grid.length; i += 9)
      display.push(values.slice(i, i + 9));

    return display;
  }

  finalCheck() {
    Object.keys(this.axes).forEach(axis =>
      this.axes[axis].forEach(group => {
        const missing = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
          num => !group.find(neighbor => num === neighbor),
        );

        if (!isEmpty(missing)) return false;
      }),
    );

    return true;
  }

  get axes() {
    const axes = {
      row: [[], [], [], [], [], [], [], [], []],
      column: [[], [], [], [], [], [], [], [], []],
      box: [[], [], [], [], [], [], [], [], []],
    };

    this.grid.forEach(cell =>
      ["row", "column", "box"].forEach(prop =>
        axes[prop][cell.pos[prop]].push(cell.number),
      ),
    );

    return axes;
  }

  setEmptyCells() {
    this.emptyCells = this.grid.filter(cell => cell.number === 0);
  }
}