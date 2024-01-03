var assert = require('assert');

describe('Kyu 7: Shortest Word', function () {
  it('solution1', function () {
    function findShort(s){
      var min = s.length;
      s.split(/\s+/).forEach(element => {
        min = min < element.length ? min : element.length;
      });
      return min;
    }

    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  });

  it('solution2', function () {
    function findShort(s){
      return Math.min(...s.split(/\s+/).map(element => element.length));
    }

    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  });

});
