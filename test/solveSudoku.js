const expect = require('chai').expect,
      solveSudoku = require('../logic/solveSudoku'),
      createDisplay = require('../logic/createDisplay');

describe('Solve the sudoku', () => {
  let sudoku = require('./helpers/sudoku.json'),
      result,
      expectedResult = require('./helpers/result.json');

  before(() => {
    solveSudoku(sudoku);
    result = createDisplay(sudoku);
  })
  

  it('Should solve the sudoku', () => {
    let error = false;
    
    for (let x = 0; x < 9; x++)
      for (let y = 0; y < 9; y++) {
        let value = result[x][y],
            expectedValue = expectedResult[x][y];

        if (value !== expectedValue) error = true;
      }

    expect(error).to.be.false;
  });
});