module.exports = (sudoku, cell) => {
  let otherRowPossibilities = new Array();

  // Loop through all the cells in the same row.
  for (let i = 0; i < 9; i++) {
    let otherRowCell = sudoku[cell.row][i]

    // If the other cell is not the current cell and is not a permanent one
    if (otherRowCell != cell &&
      otherRowCell.value == 0)
      // Loop through all other possibilities and push them to the array.
      for (let otherPos of otherRowCell.possibilities)
        if (!otherRowPossibilities.find(value => value == otherPos))
          otherRowPossibilities.push(otherPos);
  }

  return otherRowPossibilities;
}