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
  
    // Check all permanent neighbors and push their values to the permanentValues array.
    for (let neighbors of [this.boxNeighbors, this.rowNeighbors, this.columnNeighbors])
      for (let otherCell of neighbors)
        if (otherCell.value !== 0 &&
            !permanentValues.includes(otherCell.value))
          permanentValues.push(otherCell.value);
  
    // If the cell has no possibilities (i.e. first time this runs)
    // loop through 1 to 9 and compare with permanentValues to push possibilities.
    if (this.possibilities.length === 0) {
      for (let value = 1; value < 10; value++)
        if (!permanentValues.includes(value))
          this.possibilities.push(value);
    }
    // Otherwise loop through every possibility and remove it if there's a permanent neighbor with that value.
    else
      for (let possibility of this.possibilities)
        if (permanentValues.includes(possibility))
          this.possibilities = this.possibilities.filter(value => value != possibility);
  }

  checkUniqueness() {
    // If there is only one possible value, set the cell's value to it.
    if (this.possibilities.length === 1) {
      this.setValue(this.possibilities[0]);
      return;
    }
    
    // Create arrays to hold other neighbors' possibilities.
    let otherBoxPossibilities = new Array(),
        otherRowPossibilities = new Array(),
        otherColumnPossibilities = new Array();
    
    // Loop through every non permanent neighbor
    // and push their possibilities to their respective array.
    for (let neighbors of [this.boxNeighbors, this.rowNeighbors, this.columnNeighbors])
      for (let neighbor of neighbors)
        if (neighbor.value === 0)
          for (let possibility of neighbor.possibilities) {
            if (neighbors === this.boxNeighbors &&
                checkArray(otherBoxPossibilities, possibility))
              otherBoxPossibilities.push(possibility);
            else if (neighbors === this.rowNeighbors &&
                checkArray(otherRowPossibilities, possibility))
              otherRowPossibilities.push(possibility);
            else if (neighbors === this.columnNeighbors &&
                checkArray(otherColumnPossibilities, possibility))
              otherColumnPossibilities.push(possibility);
          }

    // Loop through every cell posibility
    // and if the possibility is unique in the box or its axis set the cell's value to it
    for (let possibility of this.possibilities) {
      let uniqueInBox = checkArray(otherBoxPossibilities, possibility),
          uniqueInRow = checkArray(otherRowPossibilities, possibility),
          uniqueInColumn = checkArray(otherColumnPossibilities, possibility);
          
      if (uniqueInBox || uniqueInRow || uniqueInColumn) {
        this.setValue(possibility);
        break;
      }
    }
  }

  setValue(value) {
    // Set the value
    this.value = value;
    this.possibilities = new Array();
    // Update its neighbors' possibilities
    for (let neighbors of [this.boxNeighbors, this.rowNeighbors, this.columnNeighbors])
      for (let neighbor of neighbors)
        if (neighbor.value === 0)
          neighbor.checkPossibilities();
  }
}

const checkArray = (array, possibility) => !array.find(value => value === possibility);