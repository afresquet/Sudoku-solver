import Sudoku from "./logic/Sudoku";

const test = [
  {
    value: 5,
    pos: { row: 0, column: 0, box: 1 },
  },
  {
    value: 3,
    pos: { row: 0, column: 1, box: 1 },
  },
  {
    value: 0,
    pos: { row: 0, column: 2, box: 1 },
  },
  {
    value: 0,
    pos: { row: 0, column: 3, box: 2 },
  },
  {
    value: 7,
    pos: { row: 0, column: 4, box: 2 },
  },
  {
    value: 0,
    pos: { row: 0, column: 5, box: 2 },
  },
  {
    value: 0,
    pos: { row: 0, column: 6, box: 3 },
  },
  {
    value: 0,
    pos: { row: 0, column: 7, box: 3 },
  },
  {
    value: 0,
    pos: { row: 0, column: 8, box: 3 },
  },
  {
    value: 6,
    pos: { row: 1, column: 0, box: 1 },
  },
  {
    value: 0,
    pos: { row: 1, column: 1, box: 1 },
  },
  {
    value: 0,
    pos: { row: 1, column: 2, box: 1 },
  },
  {
    value: 1,
    pos: { row: 1, column: 3, box: 2 },
  },
  {
    value: 9,
    pos: { row: 1, column: 4, box: 2 },
  },
  {
    value: 5,
    pos: { row: 1, column: 5, box: 2 },
  },
  {
    value: 0,
    pos: { row: 1, column: 6, box: 3 },
  },
  {
    value: 0,
    pos: { row: 1, column: 7, box: 3 },
  },
  {
    value: 0,
    pos: { row: 1, column: 8, box: 3 },
  },
  {
    value: 0,
    pos: { row: 2, column: 0, box: 1 },
  },
  {
    value: 9,
    pos: { row: 2, column: 1, box: 1 },
  },
  {
    value: 8,
    pos: { row: 2, column: 2, box: 1 },
  },
  {
    value: 0,
    pos: { row: 2, column: 3, box: 2 },
  },
  {
    value: 0,
    pos: { row: 2, column: 4, box: 2 },
  },
  {
    value: 0,
    pos: { row: 2, column: 5, box: 2 },
  },
  {
    value: 0,
    pos: { row: 2, column: 6, box: 3 },
  },
  {
    value: 6,
    pos: { row: 2, column: 7, box: 3 },
  },
  {
    value: 0,
    pos: { row: 2, column: 8, box: 3 },
  },
  {
    value: 8,
    pos: { row: 3, column: 0, box: 4 },
  },
  {
    value: 0,
    pos: { row: 3, column: 1, box: 4 },
  },
  {
    value: 0,
    pos: { row: 3, column: 2, box: 4 },
  },
  {
    value: 0,
    pos: { row: 3, column: 3, box: 5 },
  },
  {
    value: 6,
    pos: { row: 3, column: 4, box: 5 },
  },
  {
    value: 0,
    pos: { row: 3, column: 5, box: 5 },
  },
  {
    value: 0,
    pos: { row: 3, column: 6, box: 6 },
  },
  {
    value: 0,
    pos: { row: 3, column: 7, box: 6 },
  },
  {
    value: 3,
    pos: { row: 3, column: 8, box: 6 },
  },
  {
    value: 4,
    pos: { row: 4, column: 0, box: 4 },
  },
  {
    value: 0,
    pos: { row: 4, column: 1, box: 4 },
  },
  {
    value: 0,
    pos: { row: 4, column: 2, box: 4 },
  },
  {
    value: 8,
    pos: { row: 4, column: 3, box: 5 },
  },
  {
    value: 0,
    pos: { row: 4, column: 4, box: 5 },
  },
  {
    value: 3,
    pos: { row: 4, column: 5, box: 5 },
  },
  {
    value: 0,
    pos: { row: 4, column: 6, box: 6 },
  },
  {
    value: 0,
    pos: { row: 4, column: 7, box: 6 },
  },
  {
    value: 1,
    pos: { row: 4, column: 8, box: 6 },
  },
  {
    value: 7,
    pos: { row: 5, column: 0, box: 4 },
  },
  {
    value: 0,
    pos: { row: 5, column: 1, box: 4 },
  },
  {
    value: 0,
    pos: { row: 5, column: 2, box: 4 },
  },
  {
    value: 0,
    pos: { row: 5, column: 3, box: 5 },
  },
  {
    value: 2,
    pos: { row: 5, column: 4, box: 5 },
  },
  {
    value: 0,
    pos: { row: 5, column: 5, box: 5 },
  },
  {
    value: 0,
    pos: { row: 5, column: 6, box: 6 },
  },
  {
    value: 0,
    pos: { row: 5, column: 7, box: 6 },
  },
  {
    value: 6,
    pos: { row: 5, column: 8, box: 6 },
  },
  {
    value: 0,
    pos: { row: 6, column: 0, box: 7 },
  },
  {
    value: 6,
    pos: { row: 6, column: 1, box: 7 },
  },
  {
    value: 0,
    pos: { row: 6, column: 2, box: 7 },
  },
  {
    value: 0,
    pos: { row: 6, column: 3, box: 8 },
  },
  {
    value: 0,
    pos: { row: 6, column: 4, box: 8 },
  },
  {
    value: 0,
    pos: { row: 6, column: 5, box: 8 },
  },
  {
    value: 2,
    pos: { row: 6, column: 6, box: 9 },
  },
  {
    value: 8,
    pos: { row: 6, column: 7, box: 9 },
  },
  {
    value: 0,
    pos: { row: 6, column: 8, box: 9 },
  },
  {
    value: 0,
    pos: { row: 7, column: 0, box: 7 },
  },
  {
    value: 0,
    pos: { row: 7, column: 1, box: 7 },
  },
  {
    value: 0,
    pos: { row: 7, column: 2, box: 7 },
  },
  {
    value: 4,
    pos: { row: 7, column: 3, box: 8 },
  },
  {
    value: 1,
    pos: { row: 7, column: 4, box: 8 },
  },
  {
    value: 9,
    pos: { row: 7, column: 5, box: 8 },
  },
  {
    value: 0,
    pos: { row: 7, column: 6, box: 9 },
  },
  {
    value: 0,
    pos: { row: 7, column: 7, box: 9 },
  },
  {
    value: 5,
    pos: { row: 7, column: 8, box: 9 },
  },
  {
    value: 0,
    pos: { row: 8, column: 0, box: 7 },
  },
  {
    value: 0,
    pos: { row: 8, column: 1, box: 7 },
  },
  {
    value: 0,
    pos: { row: 8, column: 2, box: 7 },
  },
  {
    value: 0,
    pos: { row: 8, column: 3, box: 8 },
  },
  {
    value: 8,
    pos: { row: 8, column: 4, box: 8 },
  },
  {
    value: 0,
    pos: { row: 8, column: 5, box: 8 },
  },
  {
    value: 0,
    pos: { row: 8, column: 6, box: 9 },
  },
  {
    value: 7,
    pos: { row: 8, column: 7, box: 9 },
  },
  {
    value: 9,
    pos: { row: 8, column: 8, box: 9 },
  },
];

const sudoku = new Sudoku(
  "800100070020040800060700000000470908240080000038000005080604100900007204005810006",
);

console.log(sudoku.algorithm())
