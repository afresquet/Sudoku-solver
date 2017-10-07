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

    it('Cell [7, 6] should have [[6, 6], [6, 7], [6, 8], [7, 7], [7, 8], [8, 6], [8, 7], [8, 9]] as box neighbors', () => {
      expect(sudoku[7][6].boxNeighbors[0]).to.equal(sudoku[6][6]);
      expect(sudoku[7][6].boxNeighbors[1]).to.equal(sudoku[6][7]);
      expect(sudoku[7][6].boxNeighbors[2]).to.equal(sudoku[6][8]);
      expect(sudoku[7][6].boxNeighbors[3]).to.equal(sudoku[7][7]);
      expect(sudoku[7][6].boxNeighbors[4]).to.equal(sudoku[7][8]);
      expect(sudoku[7][6].boxNeighbors[5]).to.equal(sudoku[8][6]);
      expect(sudoku[7][6].boxNeighbors[6]).to.equal(sudoku[8][7]);
      expect(sudoku[7][6].boxNeighbors[7]).to.equal(sudoku[8][8]);
    });

    it('Cell [1, 2] should have [[1, 0], [1, 1], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]] as row neighbors', () => {
      expect(sudoku[1][2].rowNeighbors[0]).to.equal(sudoku[1][0]);
      expect(sudoku[1][2].rowNeighbors[1]).to.equal(sudoku[1][1]);
      expect(sudoku[1][2].rowNeighbors[2]).to.equal(sudoku[1][3]);
      expect(sudoku[1][2].rowNeighbors[3]).to.equal(sudoku[1][4]);
      expect(sudoku[1][2].rowNeighbors[4]).to.equal(sudoku[1][5]);
      expect(sudoku[1][2].rowNeighbors[5]).to.equal(sudoku[1][6]);
      expect(sudoku[1][2].rowNeighbors[6]).to.equal(sudoku[1][7]);
      expect(sudoku[1][2].rowNeighbors[7]).to.equal(sudoku[1][8]);
    });

    it('Cell [3, 5] should have [[6, 6], [6, 7], [6, 8], [7, 7], [7, 8], [8, 6], [8, 7], [8, 9]] as column neighbors', () => {
      expect(sudoku[3][5].columnNeighbors[0]).to.equal(sudoku[0][5]);
      expect(sudoku[3][5].columnNeighbors[1]).to.equal(sudoku[1][5]);
      expect(sudoku[3][5].columnNeighbors[2]).to.equal(sudoku[2][5]);
      expect(sudoku[3][5].columnNeighbors[3]).to.equal(sudoku[4][5]);
      expect(sudoku[3][5].columnNeighbors[4]).to.equal(sudoku[5][5]);
      expect(sudoku[3][5].columnNeighbors[5]).to.equal(sudoku[6][5]);
      expect(sudoku[3][5].columnNeighbors[6]).to.equal(sudoku[7][5]);
      expect(sudoku[3][5].columnNeighbors[7]).to.equal(sudoku[8][5]);
    });
  });

  // createDisplay();
  describe('Create a sudoku two dimensional array to display values', () => {
    it('Cell [0, 0]\'s only value should be 5', () => expect(display[0][0]).to.equal(5));

    it('Cell [5, 6]\'s only value should be 0', () => expect(display[5][6]).to.equal(0));

    it('Cell [1, 3]\'s only value should be 1', () => expect(display[1][3]).to.equal(1));
  });
});