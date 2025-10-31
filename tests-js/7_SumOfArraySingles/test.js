const { assert } = require('chai');

describe('Kyu 7: Sum of array singles', function () {

  function repeats(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
        sum += arr[i];
      }
    }

    return sum;
  };

  it('Tests', () => {
    assert.strictEqual(repeats([4,5,7,5,4,8]), 15);
    assert.strictEqual(repeats([9, 10, 19, 13, 19, 13]), 19);
    assert.strictEqual(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
    assert.strictEqual(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
    assert.strictEqual(repeats([5, 10, 19, 13, 10, 13]), 24);
  })

});
