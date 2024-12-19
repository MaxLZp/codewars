const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Multiply the strings in the array', function () {

  function arrMultiply(arr){
    return `${arr[0] * arr[1]}`;
  }

  it("Basic Test Cases", function() {
    assert.equal(arrMultiply(['4','5']),"20");
    assert.equal(arrMultiply(['2','-5']),"-10");
    assert.equal(arrMultiply(['9','0']),"0");
  });

});
