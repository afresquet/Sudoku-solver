const { expect } = require('chai'),
      getNonPermanentCells = require('../logic/getNonPermanentCells'),
      otherBoxPossibilities = require('../logic/checkUniqueness/otherBoxPossibilities'),
      otherRowPossibilities = require('../logic/checkUniqueness/otherRowPossibilities'),
      otherColumnPossibilities = require('../logic/checkUniqueness/otherColumnPossibilities'),
      checkUniqueness = require('../logic/checkUniqueness/checkUniqueness');

describe('Check for unique possibilities', () => {
  let sudoku = require('./helpers/afterCheck.json'),
      cells = getNonPermanentCells(sudoku),
      boxArray = otherBoxPossibilities(sudoku, sudoku[0][5]),
      rowArray = otherRowPossibilities(sudoku, sudoku[4][6]),
      columnArray = otherColumnPossibilities(sudoku, sudoku[0][7]);

  describe('Create arrays of possibilities', () => {
    it('Box possibilities for cell [0, 5] should be [2, 6, 3, 4]', () => {
      expect(boxArray[0]).to.equal(2);
      expect(boxArray[1]).to.equal(6);
      expect(boxArray[2]).to.equal(3);
      expect(boxArray[3]).to.equal(4);
    });

    it('Row possibilities for cell [4, 6]  should be [2, 5, 6, 9]', () => {
      expect(rowArray[0]).to.equal(2);
      expect(rowArray[1]).to.equal(5);
      expect(rowArray[2]).to.equal(6);
      expect(rowArray[3]).to.equal(9);
    });
  
    it('Column possibilities for cell [0, 7]  should be [2, 3, 4, 5, 9]', () => {
      expect(columnArray[0]).to.equal(2);
      expect(columnArray[1]).to.equal(3);
      expect(columnArray[2]).to.equal(4);
      expect(columnArray[3]).to.equal(5);
      expect(columnArray[4]).to.equal(9);
    });
  });

  describe('Setting their values', () => {
    before(() => checkUniqueness(sudoku, cells));

    it('Cell [0, 5] should be set to have a value of 8', () => expect(sudoku[0][5].value).to.equal(8));
    it('Cell [4, 6] should be set to have a value of 7', () => expect(sudoku[4][6].value).to.equal(7));
    it('Cell [0, 7] should be set to have a value of 1', () => expect(sudoku[0][7].value).to.equal(1));
  });
});