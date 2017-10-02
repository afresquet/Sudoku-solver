module.exports = template => {
  // Create an array with every character of the template.
  let templateArray = template.split(""),
  // Create a sudoku array.
      sudoku = new Array(9);

  // Loop through every value of the templateArray
  // and add them to the sudoku array as objects
  for (let x = 0; x < 9; x++) {
    sudoku[x] = new Array(9);
    for (let y = 0; y < 9; y++) {
      let value = templateArray.shift();
      
      sudoku[x][y] = {
        row: x,
        column: y,
        box: getBox(x, y),
        value: parseInt(value),
        possibilities: new Array()
      }
    }
  }

  // Return the sudoku array
  return sudoku
}

const getBox = (xCoord, yCoord) => {
  let cellX = Math.floor(xCoord/3),
      cellY = Math.floor(yCoord/3),
      box = 1;

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (cellX === x && cellY === y) return box;
      box++;
    }
  }
}