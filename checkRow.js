const comparePosibilities = require('./comparePosibilities');

module.exports = (sudoku, cells) => {
  for (let cell in cells) {
    // Get which row the cell is in
    cell = cells[cell];
    let cellRow = cell.row;

    let permanentValues = new Array();

    // Find other cells in the same row
    for (let i = 0; i < 9; i++) {
      let otherCell = sudoku[cellRow][i];

      // Add them to permanentValues array
      if (otherCell.isPermanent == true &&
          otherCell != cell) {
        permanentValues.push(otherCell.value);
      }
    }
    comparePosibilities(sudoku, cell, permanentValues);
  }
}