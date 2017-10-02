module.exports = sudoku => {
  // Create a cells array to hold non permanent cells.
  let cells = new Array();

  // Loop through every cell.
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      let cell = sudoku[x][y];

      // If its not permanent, add it to the cells array.
      if (cell.value == 0) cells.push(cell);
    }
  }
  
  // Return the cells array.
  return cells;
}