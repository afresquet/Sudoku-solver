module.exports = (sudoku, cell) => {
  let otherBoxPossibilities = new Array();

  // Loop through every cell.
  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++) {
      let otherCell = sudoku[x][y];

      // If it's not the same cell, their boxes are equal and it's not permanent
      if (otherCell != cell &&
        cell.box == otherCell.box &&
        otherCell.value == 0)
        // Loop through all other possibilities and push them to the array.
        for (let otherPos of otherCell.possibilities)
          if (!otherBoxPossibilities.find(value => value == otherPos))
            otherBoxPossibilities.push(otherPos);
    }

  return otherBoxPossibilities;
}