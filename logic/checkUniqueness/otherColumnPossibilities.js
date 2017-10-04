module.exports = (sudoku, cell) => {
  let otherColumnPossibilities = new Array();

  // Loop through all the cells in the same column.
  for (let i = 0; i < 9; i++) {
    let otherColumnCell = sudoku[i][cell.column]

    // If the other cell is not the current cell and is not a permanent one
    if (otherColumnCell != cell &&
      otherColumnCell.value == 0)
      // Loop through all other possibilities and push them to the array.
      for (let otherPos of otherColumnCell.possibilities)
        if (!otherColumnPossibilities.find(value => value == otherPos))
          otherColumnPossibilities.push(otherPos);
  }

  return otherColumnPossibilities;
}