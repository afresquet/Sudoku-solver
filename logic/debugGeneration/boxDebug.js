module.exports = sudoku => {
  let boxesArray = new Array(9),
      report = {
        error: false,
        boxes: new Array()
      }

  for (let i = 0; i < 9; i++)
    boxesArray[i] = new Array();

  for (let row = 0; row < 9; row++)
    for (let column = 0; column < 9; column++) {
      let cell = sudoku[row][column],
          box = getBox(row, column);

      if (cell != 0) boxesArray[box].push(cell);
    }
  
  for (let box = 0; box < boxesArray.length; box++) {
    let currentBox = boxesArray[box];

    for (let cell = 0; cell < currentBox.length - 1;) {
      let value = parseInt(currentBox.splice(cell, 1));
      
      if (currentBox.includes(value)) {
        report.error = true;
        if (!report.boxes.includes(box)) report.boxes.push(box);
      }
    }
  }

  return report;
}

const getBox = (xCoord, yCoord) => {
  let cellX = Math.floor(xCoord / 3),
    cellY = Math.floor(yCoord / 3),
    box = 0;

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (cellX === x && cellY === y) return box;
      box++;
    }
  }
}