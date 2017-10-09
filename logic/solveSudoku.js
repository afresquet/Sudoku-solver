const fs = require('fs'),
      createSudoku = require('./createSudoku'),
      getNonPermanentCells = require('./getNonPermanentCells'),
      globalCheck = require('./globalCheck'),
      checkUniqueness = require('./checkUniqueness'),
      createDisplay = require('./createDisplay'),
      debugGeneration = require('./debugGeneration/debugGeneration'),
      finalCheck = require('./finalCheck/finalCheck');

// Declare variables to hold the previous amount of non permanent cells
// and the generation version.
let prevLength,
    generation = 1;

const solveSudoku = sudoku => {
  // Get the array of non permanent cells
  let cells = getNonPermanentCells(sudoku);
  
  // If the number of non permanent cells is the same as the previous generation
  // end the process and return the progress made until the end.
  if (cells.length === prevLength) {
    console.log('Can\'t be solved, made it this far:');
    return console.log(createDisplay(sudoku));
  }
  // If there is no non permanent cells available, the process is done.
  if (cells.length == 0) {
    // Create a display array for the result
    let result = createDisplay(sudoku);

    // If it's correct, log it to the console
    // if not notify that is wrong and log it to the console.
    if (finalCheck(result)) return console.log(result);
    else {
      console.log('It\'s wrong.');
      return console.log(result);
    }
  }
  
  // Store the current amount of permanent cells to compare next generation.
  prevLength = cells.length;

  globalCheck(cells);

  checkUniqueness(cells);

  // // Catch any generation error.
  // debugGeneration(sudoku, generation);

  // If this is the first generation, all files in './generations/' get deleted.
  if (generation == 1) deleteGenerations('generations');
  // Write a JSON file with the generation's values.
  fs.writeFile(`generations/generation-${generation}.json`, JSON.stringify(createDisplay(sudoku)));
  // Increase the generation version.
  generation++;

  // Recursively re-run this function.
  solveSudoku(sudoku);
}

module.exports = solveSudoku;

// Function to delete files in a directory
// Based on https://gist.github.com/liangzan/807712#gistcomment-337828
const deleteGenerations = (dirPath) => {
  let files = fs.readdirSync(dirPath),
      filePath;

  for (let file of files) {
    filePath = `${dirPath}/${file}`;

    if (filePath == 'generations/.gitkeep')
      continue;
    else if (fs.statSync(filePath).isFile())
      fs.unlinkSync(filePath);
    else
      rmDir(filePath);
  }
}