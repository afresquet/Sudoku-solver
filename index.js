import Sudoku from "./logic/Sudoku";

const sudoku = new Sudoku(
	"800100070020040800060700000000470908240080000038000005080604100900007204005810006"
);

console.log(sudoku.algorithm());
