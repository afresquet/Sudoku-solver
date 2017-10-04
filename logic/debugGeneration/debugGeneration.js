const boxDebug = require('./boxDebug'),
      rowDebug = require('./rowDebug'),
      columnDebug = require('./columnDebug'),
      createDisplay = require('../createDisplay');

module.exports = (sudoku, generation) => {
  sudoku = createDisplay(sudoku);

  let boxReport = boxDebug(sudoku),
      rowReport = rowDebug(sudoku),
      columnReport = columnDebug(sudoku);

  if (boxReport.error) {
    if (boxReport.boxes.length == 1)
      console.log(`Generation ${generation}'s box ${boxReport.boxes} failed`);
    else
      console.log(`Generation ${generation}'s boxes [${boxReport.boxes}] failed`);
  }

  if (rowReport.error) {
    if (rowReport.rows.length == 1)
      console.log(`Generation ${generation}'s row ${rowReport.rows} failed`);
    else
      console.log(`Generation ${generation}'s rows [${rowReport.rows}] failed`);
  }

  if (columnReport.error) {
    if (columnReport.columns.length == 1)
      console.log(`Generation ${generation}'s column ${columnReport.columns} failed`);
    else
      console.log(`Generation ${generation}'s columns [${columnReport.columns}] failed`);
  }
}