const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("7kyu: The dropWhile Function",() =>{

  function dropWhile(array, predicate) {
    var idx = array.findIndex(e => !predicate(e)); 
    return idx < 0 ? [] : array.slice(idx);
  }

  function doTest(array, predicate, expected) {
    const message = `for array = ${JSON.stringify(array)}\n` +
        `and function:\n${predicate.toString()}\n`
    ;
    const actual = dropWhile(array, predicate);
    assert.deepEqual(actual, expected, message);
  }

  const isEven = num => num % 2 === 0;
  const isOdd  = num => num % 2 !== 0;

  it("Should pass Example tests",() =>{
    const evens = [2, 4, 8];
    doTest(evens, isEven, []);
    doTest(evens, isOdd, evens);

    const evensOddsEvens = [2, 4, 8, 5, 7, 9, 16, 32];
    doTest(evensOddsEvens, isEven, [5, 7, 9, 16, 32]);
    doTest(evensOddsEvens, isOdd, evensOddsEvens);

    doTest([], isEven, []);  })
})
