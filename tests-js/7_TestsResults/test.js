const { assert, config } = require("chai");
config.truncateThreshold = 0;


describe("Test's results", () => {
  it("Basic Tests", () => {

    function testResult(array) {
      var result = [
        0,
        { 'h': 0, 'a': 0, 'l': 0 }
      ];

      array.forEach(element => {
        result[0] += element;
        if (element > 8) { result[1]['h']++; }
        if (element < 7) { result[1]['l']++; }
        if (element == 7 || element == 8) { result[1]['a']++; }
      });
      result[0] = 1*(result[0] / array.length).toFixed(3);
      if (result[1]['h'] == array.length) { result.push("They did well"); }

      return result;
    }

    assert.deepEqual(testResult([10,9,9,10,9,10,9]),[9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']);
    assert.deepEqual(testResult([5,6,4,8,9,8,9,10,10,10]),[7.9, {'h': 5, 'a': 2, 'l': 3}]);
    assert.deepEqual(testResult([5,6,5,7,4,5,6,6,5]),[5.444, {'h': 0, 'a': 1, 'l': 8}]);
    assert.deepEqual(testResult([9,8,7,6,9,8,10,7,6]),[7.778, {'h': 3, 'a': 4, 'l': 2}]);
    assert.deepEqual(testResult([9,10,10,10,10,10,8,9,7,8,10]),[9.182, {'h': 8, 'a': 3, 'l': 0}]);
    assert.deepEqual(testResult([3,5,6,10,8,4,10,9]),[6.875, {'h': 3, 'a': 1, 'l': 4}]);
    assert.deepEqual(testResult([10,9,9,10,9,10]),[9.5, {'h': 6, 'a': 0, 'l': 0}, 'They did well']);
    assert.deepEqual(testResult([7,6,8,9,6,7,5,9]),[7.125, {'h': 2, 'a': 3, 'l': 3}]);
    assert.deepEqual(testResult([9,9,8,9,8,9]),[8.667, {'h': 4, 'a': 2, 'l': 0}]);
    assert.deepEqual(testResult([10,9,6,7,10,8,9,10]),[8.625, {'h': 5, 'a': 2, 'l': 1}]);
  });
});
