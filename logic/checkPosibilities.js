const getBox = require('./getBox'),
      checkBox = require('./checkBox'),
      checkRow = require('./checkRow'),
      checkColumn = require('./checkColumn'),
      checkUniqueness = require('./checkUniqueness');

module.exports = sudoku => {
  let cells = new Array();

  // Loop every cell
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      let cell = sudoku[x][y];

      // Check if its not permanent
      if (cell.isPermanent === false) cells.push(cell);
    }
  }
  
  checkBox(sudoku, cells);
  checkRow(sudoku, cells);
  checkColumn(sudoku, cells);

  checkUniqueness(sudoku, cells);
}