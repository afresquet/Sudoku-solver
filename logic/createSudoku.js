const Cell = require('./Cell');

module.exports = template => {
  // Create an array with every character of the template.
  let templateArray = template.split(""),
  // Create a sudoku array.
      sudoku = new Array(9);

  // Loop through every value of the templateArray
  // and add them to the sudoku array as objects
  for (let row = 0; row < 9; row++) {
    sudoku[row] = new Array(9);
    for (let column = 0; column < 9; column++) {
      let value = parseInt(templateArray.shift());
      
      sudoku[row][column] = new Cell(value, row, column);
    }
  }

  for (let row of sudoku)
    for (let cell of row)
      cell.setNeighbors(sudoku);

  // Return the sudoku array
  return sudoku
}