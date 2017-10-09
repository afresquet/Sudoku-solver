module.exports = cells => {
  for (let cell of cells) {
    cell.checkPossibilities();
  }
}