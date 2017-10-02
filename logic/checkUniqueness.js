const getNonPermanentCells = require('./getNonPermanentCells'),
      globalCheck = require('./globalCheck');

module.exports = (sudoku, cells) => {
  for (let cell of cells) {
    // If there is only one possible value, set the cell's value to it.
    if (cell.possibilities.length == 1) {
      setCellValue(cell, cell.possibilities[0]);
      cells = getNonPermanentCells(sudoku);
      globalCheck(sudoku, cells);
    }

    // Loop through every possibility.
    for (let possibility of cell.possibilities) {
      // Create arrays to hold other cell's possibilities.
      let otherBoxPossibilities = new Array(),
          otherRowPossibilities = new Array(),
          otherColumnPossibilities = new Array();

      // ***** BOX CHECK ***** //

      // Loop through every cell.
      for (let x = 0; x < 9; x++)
        for (let y = 0; y < 9; y++) {
          let otherCell = sudoku[x][y];

          // If it's not the same cell, their boxes are equal and it's not permanent
          if (otherCell != cell &&
              cell.box == otherCell.box &&
              otherCell.value == 0)
            // Loop through all other possibilities and push them to the array.
            for (let otherPos of otherCell.possibilities)
              if (!otherBoxPossibilities.find(value => value == otherPos))
                otherBoxPossibilities.push(otherPos);
        }
          
      // ***** ROW CHECK ***** //

      // Loop through all the cells in the same row.
      for (let i = 0; i < 9; i++) {
        let otherRowCell = sudoku[cell.row][i]

        // If the other cell is not the current cell and is not a permanent one
        if (otherRowCell != cell &&
            otherRowCell.value == 0)
          // Loop through all other possibilities and push them to the array.
          for (let otherPos of otherRowCell.possibilities)
            if (!otherRowPossibilities.find(value => value == otherPos))
              otherRowPossibilities.push(otherPos);
      }

      // ***** COLUMN CHECK ***** //
          
      // Loop through all the cells in the same column.
      for (let i = 0; i < 9; i++) {
        let otherColumnCell = sudoku[i][cell.column]

        // If the other cell is not the current cell and is not a permanent one
        if (otherColumnCell != cell &&
            otherColumnCell.value == 0)
          // Loop through all other possibilities and push them to the array.
          for (let otherPos of otherColumnCell.possibilities)
            if (!otherColumnPossibilities.find(value => value == otherPos))
              otherColumnPossibilities.push(otherPos);
      }

      // ***** SET VALUE ***** //
      // Create variables to check if the possibility is unique in the box/axis.
      let uniqueInBox = !otherBoxPossibilities.find(value => value == possibility),
          uniqueInRow = !otherRowPossibilities.find(value => value == possibility),
          uniqueInColumn = !otherColumnPossibilities.find(value => value == possibility);
      
      // If any of them is true, set the cell's value to the possibility.
      if (uniqueInBox || uniqueInRow || uniqueInColumn) {
        setCellValue(cell, possibility);
        cells = getNonPermanentCells(sudoku);
        globalCheck(sudoku, cells);
      }
    }
  }
}

const setCellValue = (cell, value) => {
  cell.value = value;
  cell.possibilities = new Array();
}