const createSudoku = require('./createSudoku'),
      checkPosibilities = require('./checkPosibilities'),
      createDisplay = require('./createDisplay');

// let template = "530070000600195000098000060800060003400803001700020006060000280000419005000080079";

// let template = "060080420015060378000400060100604830306010705080350000830940000072130900009020610";

// let template = "295743861431865927876192543387459216612387495549216738763534189928671354154938672";
let template = "205743861401865927806192543387459216612387495549216738763534189928671354154938672";


let sudoku = createSudoku(template);

checkPosibilities(sudoku);

// console.log(sudoku);
// console.log(sudoku[6][2]);

console.log(createDisplay(sudoku));
