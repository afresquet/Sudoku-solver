module.exports = (x, y) => {
  let boxX = Math.floor(x/3);
  let boxY = Math.floor(y/3);

  let boxNumber = 0;

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (boxX === x && boxY === y) return boxNumber + 1;
      boxNumber++;
    }
  }
}