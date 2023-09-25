var assert = require('assert');

describe('Kyu 7: Sort array by string length', function () {
  it('solution1', function () {

    function sortByLength (array) {
      // Return an array containing the same strings, ordered from shortest to longest
      return array.sort((l, r) => { return l.length - r.length});
    };

    assert.deepEqual(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
    assert.deepEqual(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
    assert.deepEqual(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
  });

});
