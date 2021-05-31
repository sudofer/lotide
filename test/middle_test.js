

const assert = require('chai').assert;
const middle   = require('../middle');

describe("middle.js", () => {
  it("should return 2 for [1,2,3]", () => {
    assert.equal(middle([1, 2, 3]), 2);
  });


  it('should return 3 for [1,2,3,4,5]', () => {
    assert.equal(middle([1,2,3,4,5]), 3); 
  });
});

