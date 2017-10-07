const { expect } = require('chai'),
      createSudoku = require('../logic/createSudoku'),
      createDisplay = require('../logic/createDisplay');

describe('Create sudoku objects', () => {
  let template = require('./helpers/template.json'),
      sudoku = createSudoku(template),
      display = createDisplay(sudoku);

  // createSudoku();
  describe('Create a sudoku two dimensional array with properties', () => {
    it('Cell [8, 2]\'s row should be 8', () => expect(sudoku[8][2].row).to.equal(8));
    
    it('Cell [4, 7]\'s column should be 7', () => expect(sudoku[4][7].column).to.equal(7));

    it('Cell [1, 5]\'s box should be 2', () => expect(sudoku[1][5].box).to.equal(2));

    it('Cell [0, 0]\'s value should be 5', () => expect(sudoku[0][0].value).to.equal(5));
  });

  // createDisplay();
  describe('Create a sudoku two dimensional array to display values', () => {
    it('Cell [0, 0]\'s only value should be 5', () => expect(display[0][0]).to.equal(5));

    it('Cell [5, 6]\'s only value should be 0', () => expect(display[5][6]).to.equal(0));

    it('Cell [1, 3]\'s only value should be 1', () => expect(display[1][3]).to.equal(1));
  });
});