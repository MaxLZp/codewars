var assert = require('assert');

describe('Kyu 7: Finding length of the sequence', function () {

  var lengthOfSequence = function (arr, n) {
    var indexes = [];
    arr.forEach((element, i) => {
      if (element === n) {
        indexes.push(i);
      }
    });

    return indexes.length === 2 ? (indexes[1] - indexes[0] + 1) : 0;
  };

  it("Test", function() {
    assert.equal(lengthOfSequence([1, 1], 1), 2, 'Returns two when there are only two elements in the array');
    assert.equal(lengthOfSequence([1, 2, 3, 1], 1), 4, 'Returns four for an array of length four and the number to be searched at the boundaries');
    assert.equal(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, 'Returns five');
    assert.equal(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, 'Returns four');
  });

});
