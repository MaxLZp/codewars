var assert = require('assert');

describe('Kyu 7: What dominates your array?', function () {
  it('solution1', function () {

    assert.equal(dominator([3,4,3,2,3,1,3,3]),3);
    assert.equal(dominator([1,2,3,4,5]),-1);
    assert.equal(dominator([1,1,1,2,2,2]),-1);
    assert.equal(dominator([1,1,1,2,2,2,2]),2);

    function dominator(arr) {
      var results = new Map();
      arr.forEach((element) => {
        if (!results.has(element)) {
          results.set(element, 0);
        }
        results.set(element, results.get(element) + 1);
      });

      results.forEach((element, key, map) => { if (element <= arr.length/2) {
        map.delete(key);
      } });
      if (results.size > 0) {
        return results.keys().next().value;
      }
      return -1;
    }
  });

});
