const addPossibilities = require('./addPossibilities');

module.exports = (sudoku, cells) => {
  for (let cell of cells) {
    // Get which column the cell is in
    let cellColumn = cell.column,
    // Create an to hold all other cells in the column that are permanent
        permanentValues = new Array();

    // Loop through other cells in the same column
    for (let i = 0; i < 9; i++) {
      let otherCell = sudoku[i][cellColumn];

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