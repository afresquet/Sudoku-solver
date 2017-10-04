const boxFinal = require('./boxFinal'),
      rowFinal = require('./rowFinal'),
      columnFinal = require('./columnFinal');

module.exports = result => boxFinal(result) && rowFinal(result) && columnFinal(result);