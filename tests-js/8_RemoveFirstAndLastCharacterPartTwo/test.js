var assert = require('assert');

describe('Kyu 8: Remove First and Last Character Part Two', function () {
  function array(string) {
    var arr = string.split(',');
    arr.shift();
    arr.pop();
    return arr.length ? arr.join(' ') : null;
  }

  function test(string, expected) {
    it(`string='${string}'`, function() {
      assert.strictEqual(array(string), expected);
    });
  }

  test('', null);
  test('1', null);
  test('A1,B2', null);
  test('1,2,3', '2');
  test('1,2,3,4', '2 3');
  test('A1,B2,C3,D4,E5', 'B2 C3 D4');
  test('A,1,23,456,78,9,Z', '1 23 456 78 9');

});
