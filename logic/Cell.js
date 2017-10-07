module.exports = class Cell {
  constructor(value, row, column) {
    this.row = row;
    this.column = column;
    this.box = this.calculateBox();
    this.value = value;
    this.boxNeighbors = new Array();
    this.rowNeighbors = new Array();
    this.columnNeighbors = new Array();
    this.possibilities = new Array();
  }

  calculateBox() {
    let cellRow = Math.floor(this.row / 3),
        cellColumn = Math.floor(this.column / 3),
        box = 1;
  
    for (let row = 0; row < 3; row++)
      for (let column = 0; column < 3; column++) {
        if (cellRow === row && cellColumn === column) return box;
        box++;
      }
  }

  setNeighbors(sudoku) {
    // Add box neighbors
    for (let row of sudoku)
      for (let otherCell of row)
        if (this.box === otherCell.box &&
            this !== otherCell)
          this.boxNeighbors.push(otherCell);

    // Add row and column neighbors
    for (let i = 0; i < 9; i++) {
      let otherRowCell = sudoku[this.row][i],
          otherColumnCell = sudoku[i][this.column];

      if (this !== otherRowCell) this.rowNeighbors.push(otherRowCell);
      if (this !== otherColumnCell) this.columnNeighbors.push(otherColumnCell);
    }
  }

  checkPossibilities() {
    let permanentValues = new Array();

    for (let neighbors of [this.boxNeighbors, this.rowNeighbors, this.columnNeighbors])
      for (let otherCell of neighbors)
        if (otherCell.value != 0 &&
            !permanentValues.includes(otherCell.value))
          permanentValues.push(otherCell.value);

    if (this.possibilities.length === 0)
      for (let value = 1; value < 10; value++)
        if (!permanentValues.includes(value))
          this.possibilities.push(value);
    else
      for (let possibility of this.possibilities)
        if (permanentValues.includes(possibility))
          this.possibilities = this.possibilities.filter(value => value != possibility);
  }
}