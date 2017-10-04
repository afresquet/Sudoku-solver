module.exports = sudoku => {
  let rowsArray = new Array(9),
      report = {
        error: false,
        rows: new Array()
      }
  
  for (let i = 0; i < 9; i++)
    rowsArray[i] = new Array();

  for (let row in sudoku)
    for (let cell of sudoku[row])
      if (cell != 0) rowsArray[row].push(cell);

  for (let row = 0; row < rowsArray.length; row++) {
    let currentRow = rowsArray[row];

    for (let cell = 0; cell < currentRow.length - 1;) {
      let value = parseInt(currentRow.splice(cell, 1));
      
      if (currentRow.includes(value)) {
        report.error = true;
        if (!report.rows.includes(row)) report.rows.push(row);
      }
    }
  }

  return report;
}