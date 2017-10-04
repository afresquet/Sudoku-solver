const addPossibilities = require('./addPossibilities');

module.exports = (sudoku, cells) => {
  for (let cell of cells) {
    // Get which box the cell is in
    let cellBox = cell.box
    // Create an to hold all other cells in the box that are permanent
        permanentValues = new Array();

    // Loop through every cell
    for (let x = 0; x < 9; x++)
      for (let y = 0; y < 9; y++) {
        let otherCell = sudoku[x][y],
            otherBox = otherCell.box;

        // If its box is the same as the cell, it's permanent and it's not the same as the cell
        // Add it to the permanentValues array
        if (otherBox === cellBox &&
            otherCell.value != 0  &&
            otherCell != cell)
          permanentValues.push(otherCell.value);
      }

    // Add/compare the cell's possibilities
    addPossibilities(cell, permanentValues);
  }
}