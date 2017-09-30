module.exports = (sudoku, cell, permanentValues) => {
  let posibilities = cell.posibilities;
  
  for (let posibility in posibilities) {
    posibility = posibilities[posibility];
    
    if (permanentValues.includes(posibility) == true) {
      cell.posibilities = posibilities.filter(value => value != posibility);
    }
  }
}