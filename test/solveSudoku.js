const { expect } = require('chai'),
      solveSudoku = require('../logic/solveSudoku');

xdescribe('Solve the sudoku', () => {
  let sudoku = require('./helpers/template.json'),
      result = solveSudoku(sudoku),
      expectedResult = require('./helpers/result.json');

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