module.exports = sudoku => {
  let display = new Array(9);
  
  for (let x = 0; x < 9; x++) {
    display[x] = new Array(9);
    
    for (let y = 0; y < 9; y++) {
      display[x][y] = sudoku[x][y].value
    }
  }

  return display;
}