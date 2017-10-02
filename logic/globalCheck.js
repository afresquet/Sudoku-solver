const getNonPermanentCells = require('./getNonPermanentCells'),
      checkBox = require('./checkBox'),
      checkRow = require('./checkRow'),
      checkColumn = require('./checkColumn');

module.exports = (sudoku, cells) => {
  checkBox(sudoku, cells);
  checkRow(sudoku, cells);
  checkColumn(sudoku, cells);
}