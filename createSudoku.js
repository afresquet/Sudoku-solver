const getBox = require('./getBox');

module.exports = template => {
  let templateArray = template.split("");

  let sudoku = new Array(9);

  for (let x = 0; x < 9; x++) {
    sudoku[x] = new Array(9);
    for (let y = 0; y < 9; y++) {
      let value = templateArray.shift();
      
      sudoku[x][y] = {
        row: x,
        column: y,
        box: getBox(x, y),
        value: parseInt(value),
        isPermanent: false,
        posibilities: new Array()
      }
      
      if (value != 0) sudoku[x][y].isPermanent = true;
    }
  }

  return sudoku
}