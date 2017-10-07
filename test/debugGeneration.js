const { expect } = require('chai'),
      boxDebug = require('../logic/debugGeneration/boxDebug')
      rowDebug = require('../logic/debugGeneration/rowDebug')
      columnDebug = require('../logic/debugGeneration/columnDebug');

describe('Generation debugger', () => {
  let sudoku = require('./helpers/broken-generation-1.json'),
      boxReport = boxDebug(sudoku),
      rowReport = rowDebug(sudoku),
      columnReport = columnDebug(sudoku);

  it('Should get an error on box 0', () => {
    expect(boxReport.error).to.be.true;
    expect(boxReport.boxes[0]).to.equal(0);
  });
  
  it('Should get an error on row 5', () => {
    expect(rowReport.error).to.be.true;
    expect(rowReport.rows[0]).to.equal(5);
  });

  it('Should get an error on column 3', () => {
    expect(columnReport.error).to.be.true;
    expect(columnReport.columns[1]).to.equal(3);
  });
});