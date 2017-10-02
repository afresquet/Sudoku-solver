const expect = require('chai').expect,
      getNonPermanentCells = require('../logic/getNonPermanentCells');

describe('Get non permanent cells', () => {
  let sudoku = require('./helpers/sudoku.json'),
      cells = getNonPermanentCells(sudoku);

  it('Should return cells that have a value of 0', () => {
    expect(cells[0].value).to.equal(0);
    expect(cells[1].value).to.equal(0);
    expect(cells[2].value).to.equal(0);
    expect(cells[3].value).to.equal(0);
    expect(cells[4].value).to.equal(0);
  });
});