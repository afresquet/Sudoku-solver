const expect = require('chai').expect,
      getBox = require('../logic/getBox');

describe('Get cell\'s box', () => {
  it('cell [0, 0] should belong to box 1', () => expect(getBox(0, 0)).to.equal(1));
  
  it('cell [5, 7] should belong to box 6', () => expect(getBox(5, 7)).to.equal(6));
  
  it('cell [7, 5] should belong to box 8', () => expect(getBox(7, 5)).to.equal(8));
});