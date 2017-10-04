const expect = require('chai').expect,
      boxFinal = require('../logic/finalCheck/boxFinal'),
      rowFinal = require('../logic/finalCheck/rowFinal'),
      columnFinal = require('../logic/finalCheck/columnFinal');

describe('Final check to see if solve is correct', () => {
  let sudoku = require('./helpers/result.json'),
      boxCheck = boxFinal(sudoku),
      rowCheck = rowFinal(sudoku),
      columnCheck = columnFinal(sudoku);

  it('Every box should have all values from 1-9', () => expect(boxCheck).to.be.true);

  it('Every row should have all values from 1-9', () => expect(rowCheck).to.be.true);

  it('Every column should have all values from 1-9', () => expect(columnCheck).to.be.true);
});