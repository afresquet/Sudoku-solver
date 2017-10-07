const addPossibilities = require('./addPossibilities');

module.exports = (sudoku, cells) => {
  for (let cell of cells) {
    // Get which box the cell is in
    let cellBox = cell.box
    // Create an to hold all other cells in the box that are permanent
        permanentValues = new Array();

    // Loop through every cell
    for (let row of sudoku)
      for (let otherCell of row) {
        let otherBox = otherCell.box;

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