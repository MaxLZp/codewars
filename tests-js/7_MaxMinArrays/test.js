var assert = require('assert');

describe('Kyu 7: Max-min arrays', function () {

  it('solution1', function () {

    function solve(arr){
      var sorted = arr.sort((l, r) => ( r - l ));
      var result = [];
      for (let i = 0, j = sorted.length - 1 - i; i <= j; i++, j--) {
        result.push(sorted[i]);
        if (i != j) {
          result.push(sorted[j]);
        }
      }

      return result;
    };

    assert.deepEqual(solve([15,11,10,7,12]),[15,7,12,10,11]);
    assert.deepEqual(solve([91,75,86,14,82]),[91,14,86,75,82]);
    assert.deepEqual(solve([84,79,76,61,78]),[84,61,79,76,78]);
    assert.deepEqual(solve([52,77,72,44,74,76,40]),[77,40,76,44,74,52,72]);
    assert.deepEqual(solve([1,6,9,4,3,7,8,2]),[9,1,8,2,7,3,6,4]);
    assert.deepEqual(solve([78,79,52,87,16,74,31,63,80]),[87,16,80,31,79,52,78,63,74]);

  });

});
