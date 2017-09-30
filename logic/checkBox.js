module.exports = (sudoku, cells) => {
  for (let cell in cells) {
    // Get which box the cell is in
    cell = cells[cell];
    let cellBox = cell.box;
    
    let permanentValues = new Array();

    // Find other cells inside the same box
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        let otherCell = sudoku[x][y];
        let otherBox = otherCell.box;

        // Add them to permanentValues array
        if (otherBox === cellBox &&
            otherCell.isPermanent === true &&
            otherCell != cell) {
          permanentValues.push(otherCell.value);
        }
      }
    }
    
    // Check missing numbers from 1-9
    for (let i = 1; i < 10; i++) {
      let posibility = permanentValues.includes(i);

      // If it's missing, add it to the cell as a possibility
      if (!posibility) cell.posibilities.push(i);
    }
  }
}