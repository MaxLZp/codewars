const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Lario and Muigi Pipe Problem", () => {

  function pipeFix(numbers){
    const start = numbers[0];
    let end = numbers[numbers.length - 1];
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  it("Testing for fixed tests", () => {
    assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
    assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
    assert.deepEqual(pipeFix([6,9]),[6,7,8,9]);
    assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4]);
    assert.deepEqual(pipeFix([1,2,3]),[1,2,3]);
  });
});
