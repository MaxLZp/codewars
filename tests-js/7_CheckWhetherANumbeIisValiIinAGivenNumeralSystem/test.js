const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Check whether a number is valid in a given numeral system', function () {

  function validateBase(num, base) {
    var str = base < 10 
      ? `[^0-${base-1}]` 
      : '[^0-9'+(() => {
          var str = '';
          for(i = 0; i < base - 10; i++) {
            str += String.fromCharCode('a'.charCodeAt(0) + i);
          }
          return str+']';
        })();
    var regexp = new RegExp(str, 'i');

    return !regexp.test(num);
  }

  const cases = [
    ['7623', 8, true],
    ['ABCDEF', 16, true],
    ['6124', 5, false],
    ['ABC', 12, false],
    ['Y', 34, false],
    ['2738', 8, false],
    ['0020', 10, true]
  ]
  for (let [num, base, expected] of cases) {
    it(`Should return ${expected} for number: ${num}, base: ${base}`, () => {
      assert.strictEqual(validateBase(num, base), expected);
    });
  }

});
