const addPossibilities = require('./addPossibilities');

module.exports = (sudoku, cells) => {
  for (let cell of cells) {
    // Get which row the cell is in
    let cellRow = cell.row,
    // Create an to hold all other cells in the row that are permanent
        permanentValues = new Array();

    // Loop through other cells in the same row
    for (let i = 0; i < 9; i++) {
      let otherCell = sudoku[cellRow][i];
      
      // If it's permanent and it's not the same as the cell
      // Add it to the permanentValues array
      if (otherCell.value != 0 &&
          otherCell != cell)
        permanentValues.push(otherCell.value);
    }

    // Add/compare the cell's possibilities
    addPossibilities(cell, permanentValues);
  }
}