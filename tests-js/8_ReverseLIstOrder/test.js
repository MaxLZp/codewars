var assert = require('assert');

describe('Kyu 8: Reverse List Order ', function () {
  it('solution1', function () {

    assert.deepEqual(reverseList([1,2,3,4]), [4,3,2,1]);
    assert.deepEqual(reverseList([3,1,5,4]), [4,5,1,3]);

    function reverseList(list) {
      return list.reverse();
    }
  });
});
