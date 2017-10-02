const createSudoku = require('./logic/createSudoku'),
			solveSudoku = require('./logic/solveSudoku');

let template;
// Testing template
template = "530070000600195000098000060800060003400803001700020006060000280000419005000080079";
// Examples taken from a sudoku app for iOS. Easy, Medium and Hard can be solved, Expert can't
// template = "008000000490157002003004190185060020000020060960405300030072004049030057827009013"; // EASY
template = "800100070020040800060700000000470908240080000038000005080604100900007204005810006"; // MEDIUM
// template = "000068030290000000803100200400051060700020004000070800010005007004000000050030100"; // HARD
// template = "020000003600031000500000084370000501000060009000400000000007800200090040050200100"; // EXPERT

// Create a sudoku instance.
let sudoku = createSudoku(template);

// Solve it.
solveSudoku(sudoku);