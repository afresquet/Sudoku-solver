module.exports = result => {
  let correct = true;

  for (let row of result) {
    let values = new Array();

    for (let cell of row)
      if (!values.includes(cell)) values.push(cell);
    
    if (values.length != 9) correct = false;
  }

  return correct;
}