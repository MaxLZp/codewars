var assert = require('assert');

describe('Kyu 8: Removing Element', function () {

  it('solution1', function () {

    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

    function removeEveryOther(arr) {
      return arr.filter((element, index) => {
        return index % 2 === 0;
      });
    }

  });

});
