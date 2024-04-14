const assert = require('chai').assert;

describe('Kyu 7: Sum it continuously', function () {

  function add(arr) {
    var sum = 0;
    return arr.map((element) => (sum += element));
  }

  describe('Edge Test Cases', () => {
    it('[0]',         () => assert.deepEqual(add([0]),            [0]))
    it('[-33]',       () => assert.deepEqual(add([-33]),          [-33]))
    it('[32,-9,2,0]', () => assert.deepEqual(add([32, -9, 2, 0]), [32, 23, 25, 25]))
  })
  describe('Basic Test Cases', () => {
    it('[1,2,3,4,5]',     () => assert.deepEqual(add([1, 2, 3, 4, 5]),     [1, 3, 6, 10, 15]))
    it('[2,4,6,8,10]',    () => assert.deepEqual(add([2, 4, 6, 8, 10]),    [2, 6, 12, 20, 30]))
    it('[1,8,27,64,125]', () => assert.deepEqual(add([1, 8, 27, 64, 125]), [1, 9, 36, 100, 225]))
  })
  describe('Extended Test Cases', () => {
    it('[9,18,27,36,45,54]',       () => assert.deepEqual(add([9, 18, 27, 36, 45, 54]),         [9, 27, 54, 90, 135, 189]))
    it('[6,12,18,24,30,36,42]',    () => assert.deepEqual(add([6, 12, 18, 24, 30, 36, 42]),     [6, 18, 36, 60, 90, 126, 168]))
    it('[8,16,24,32,40,48,56,64]', () => assert.deepEqual(add([8, 16, 24, 32, 40, 48, 56, 64]), [8, 24, 48, 80, 120, 168, 224, 288]))
  })

});
