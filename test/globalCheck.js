const expect = require('chai').expect,
      getNonPermanentCells = require('../logic/getNonPermanentCells'),
      checkBox = require('../logic/globalCheck/checkBox'),
      checkRow = require('../logic/globalCheck/checkRow'),
      checkColumn = require('../logic/globalCheck/checkColumn');

describe('Reduce possibilities checking cell\'s sorroundings', () => {
  let sudoku = require('./helpers/sudoku.json'),
      cells = getNonPermanentCells(sudoku);

  // checkBox()
  describe('Checking the box', () => {
    before(() => checkBox(sudoku, cells));

    it('Cell [4, 4] should have [1, 4, 5, 7, 9] as possibilities', () => {
      expect(sudoku[4][4].possibilities[0]).to.equal(1);
      expect(sudoku[4][4].possibilities[1]).to.equal(4);
      expect(sudoku[4][4].possibilities[2]).to.equal(5);
      expect(sudoku[4][4].possibilities[3]).to.equal(7);
      expect(sudoku[4][4].possibilities[4]).to.equal(9);
      expect(sudoku[4][4].possibilities[5]).to.not.exist;
    });
  });
  
  // checkRow()
  describe('Checking the row', () => {
    before(() => checkRow(sudoku, cells));

    it('Cell [4, 4] should have [1, 5, 7, 9] as possibilities', () => {
      expect(sudoku[4][4].possibilities[0]).to.equal(5);
      expect(sudoku[4][4].possibilities[1]).to.equal(7);
      expect(sudoku[4][4].possibilities[2]).to.equal(9);
      expect(sudoku[4][4].possibilities[3]).to.not.exist;
    });
  });

  // checkColumn()
  describe('Checking the column', () => {
    before(() => checkColumn(sudoku, cells));

    it('Cell [4, 4] should only have [5] as the possibility', () => {
      expect(sudoku[4][4].possibilities[0]).to.equal(5);
      expect(sudoku[4][4].possibilities[1]).to.not.exist;
    });
  });
});