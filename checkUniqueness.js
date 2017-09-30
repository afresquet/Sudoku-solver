module.exports = (sudoku, cells) => {
  for (let cell in cells) {
    cell = cells[cell];
    
    // if (cell.posibilities.length == 1) setCellValue(cell, cell.posibilities[0]);

    for (let posibility in cell.posibilities) {
      posibility = cell.posibilities[posibility];
    
      // Row
      for (let i = 0; i < 9; i++) {
        let otherRowCell = sudoku[cell.row][i];
        for (let otherPos in otherRowCell.posibilities) {
          otherPos = otherRowCell.posibilities[otherPos];
          console.log(`${otherPos} + ${otherRowCell.row}`)
        }
        
      }

      // Column
      for (let i = 0; i < 9; i++) {
        let otherColumnCell = sudoku[i][cell.column];
        
      }
    }
  }
}

const setCellValue = (cell, value) => {
  cell.value = value;
  cell.isPermanent = true;
  cell.posibilities = new Array();
}