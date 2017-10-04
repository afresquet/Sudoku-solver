const getNonPermanentCells = require('../getNonPermanentCells'),
      otherBoxPossibilities = require('./otherBoxPossibilities'),
      otherRowPossibilities = require('./otherRowPossibilities'),
      otherColumnPossibilities = require('./otherColumnPossibilities'),
      globalCheck = require('../globalCheck/globalCheck');

module.exports = (sudoku, cells) => {
  for (let cell of cells) {
    // If there is only one possible value, set the cell's value to it.
    if (cell.possibilities.length == 1)
      setCellValue(sudoku, cells, cell, cell.possibilities[0]);

    // Loop through every possibility.
    for (let possibility of cell.possibilities) {
      // Create arrays to hold other cell's possibilities.
      let boxArray = otherBoxPossibilities(sudoku, cell),
          rowArray = otherRowPossibilities(sudoku, cell),
          columnArray = otherColumnPossibilities(sudoku, cell);

      // Check if the possibility is unique in the box/axis.
      let uniqueInBox = possibilityCheck(boxArray, possibility),
          uniqueInRow = possibilityCheck(rowArray, possibility),
          uniqueInColumn = possibilityCheck(columnArray, possibility);

      // If it's unique in any position, set the possibility as the cell's value
      // and break out of the loop.
      if (uniqueInBox || uniqueInRow || uniqueInColumn) {
        setCellValue(sudoku, cells, cell, possibility);
        break;
      }
    }
  }
}

const possibilityCheck = (array, possibility) => !array.find(value => value == possibility)

const setCellValue = (sudoku, cells, cell, value) => {
  cell.value = value;
  cell.possibilities = new Array();
  cells = getNonPermanentCells(sudoku);
  globalCheck(sudoku, cells);
}