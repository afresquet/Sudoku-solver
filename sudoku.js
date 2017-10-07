const solveSudoku = require('./logic/solveSudoku')

let sudoku;
// Testing sudoku
sudoku = "530070000600195000098000060800060003400803001700020006060000280000419005000080079";
// Examples taken from a sudoku app for iOS. Easy, Medium and Hard can be solved, Expert can't
// sudoku = "008000000490157002003004190185060020000020060960405300030072004049030057827009013"; // EASY
// sudoku = "800100070020040800060700000000470908240080000038000005080604100900007204005810006"; // MEDIUM
// sudoku = "004860030001000090800009060500206001027001000000043006050000000009000400000400015"; // HARD
sudoku = "586070000000901600000600000007000000902010305005090000090040008003500060000020470"; // HARD
// sudoku = "020000003600031000500000084370000501000060009000400000000007800200090040050200100"; // EXPERT

// Solve it.
solveSudoku(sudoku);