module.exports = result => {
  let correct = true;

  for (let column in result[0]) {
    let values = new Array;

    for (let row = 0; row < 9; row++) {
      let cell = result[row][column];

      if (!values.includes(cell)) values.push(cell);
    }

    if (values.length != 9) correct = false;
  }

  return correct;
}