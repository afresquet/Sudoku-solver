const expect = require('chai').expect,
      createSudoku = require('../logic/createSudoku'),
      createDisplay = require('../logic/createDisplay');

describe('Create sudoku objects', () => {
  let sudoku,
      template = "530070000600195000098000060800060003400803001700020006060000280000419005000080079",
      sudokuResult = require('./sudokuResult.json'),
      display,
      displayResult = require('./displayResult.json');

  sudoku = createSudoku(template);
  
  describe('Create a sudoku two dimensional array with properties', () => {
    it('cell [8, 2]\'s row should be 8', () => expect(sudoku[8][2].row).to.equal(sudokuResult[8][2].row));
    
    it('cell [4, 7]\'s column should be 7', () => expect(sudoku[4][7].column).to.equal(sudokuResult[4][7].column));

    it('cell [1, 5]\'s box should be 2', () => expect(sudoku[1][5].box).to.equal(sudokuResult[1][5].box));

    it('cell [0, 0]\'s value should be 5', () => expect(sudoku[0][0].value).to.equal(sudokuResult[0][0].value));

    it('cell [6, 7] should be permanent', () => expect(sudoku[6][7].isPermanent).to.equal(sudokuResult[6][7].isPermanent));
  });

  display = createDisplay(sudoku);

  describe('Create a sudoku two dimensional array to display values', () => {
    it('cell [0, 0]\'s value should be 5', () => expect(display[0][0]).to.equal(displayResult[0][0]));

    it('cell [5, 6]\'s value should be 0', () => expect(display[5][6]).to.equal(displayResult[5][6]));

    it('cell [1, 3]\'s value should be 1', () => expect(display[1][3]).to.equal(displayResult[1][3]));
  });
});