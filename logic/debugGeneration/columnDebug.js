module.exports = sudoku => {
  let columnsArray = new Array(9),
      report = {
        error: false,
        columns: new Array()
      }

  for (let i = 0; i < 9; i++)
    columnsArray[i] = new Array();

  for (let column = 0; column < 9; column++)
    for (let row = 0; row < 9; row++) {
      let cell = sudoku[row][column];

      if (cell != 0) columnsArray[column].push(cell);
    }

  for (let column = 0; column < columnsArray.length; column++) {
    let currentColumn = columnsArray[column];

    for (let cell = 0; cell < currentColumn.length - 1;) {
      let value = parseInt(currentColumn.splice(cell, 1));
      
      if (currentColumn.includes(value)) {
        report.error = true;
        if (!report.columns.includes(column)) report.columns.push(column);
      }
    }
  }

  return report;
}