var assert = require('assert');

describe('Kyu 7: Find Count of Most Frequent Item in an Array', function () {

  function mostFrequentItemCount(collection) {
    var counter = {0:0};
    collection.forEach(num => {
      counter[num] = (counter[num] || 0) + 1;
    });

      return Math.max(...Object.values(counter));
  }

  it("test", () => {
    assert.equal(mostFrequentItemCount([3, -1, -1]), 2);
    assert.equal(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);
    assert.equal(mostFrequentItemCount([]), 0);
  });

});
