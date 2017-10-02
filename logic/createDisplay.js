module.exports = sudoku => {
  // Create a display array to hold all the values.
  let display = new Array(9);
  
  // Loop through every cell and add its value to the array.
  for (let x = 0; x < 9; x++) {
    display[x] = new Array(9);
    for (let y = 0; y < 9; y++)
      display[x][y] = sudoku[x][y].value;
  }

  // Return the display array.
  return display;
}