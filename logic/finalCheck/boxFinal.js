module.exports = result => {
  let correct = true,
      boxesArray = new Array(9);

  for (let i = 0; i < 9; i++)
    boxesArray[i] = new Array();

  for (let row = 0; row < 9; row++)
    for (let column = 0; column < 9; column++) {
      let cell = result[row][column],
          box = getBox(row, column);

      boxesArray[box].push(cell);
    }

  for (let box of boxesArray) {
    let values = new Array();
  
    for (let cell of box)
      if (!values.includes(cell)) values.push(cell);
    
    if (values.length != 9) correct = false;
  }

  return correct;
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