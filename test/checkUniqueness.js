const expect = require('chai').expect,
      getNonPermanentCells = require('../logic/getNonPermanentCells'),
      checkUniqueness = require('../logic/checkUniqueness')

describe('Check for unique possibilities', () => {
  let sudoku = require('./helpers/afterCheck.json'),
      cells = getNonPermanentCells(sudoku);

  checkUniqueness(sudoku, cells);

  it('Cell [0, 5] should be set to have a value of 8', () => expect(sudoku[0][5].value).to.equal(8));

  it('Cell [2, 6] should be set to have a value of 5', () => expect(sudoku[2][6].value).to.equal(5));

  it('Cell [4, 2] should be set to have a value of 6', () => expect(sudoku[4][2].value).to.equal(6));
});