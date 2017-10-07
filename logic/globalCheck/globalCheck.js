const getNonPermanentCells = require('../getNonPermanentCells'),
      checkBox = require('./checkBox'),
      checkRow = require('./checkRow'),
      checkColumn = require('./checkColumn');

module.exports = cells => {
  for (let cell of cells) {
    cell.checkPossibilities();
  }
}