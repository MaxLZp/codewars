
const assert = require('assert');

describe('Kyu 7: Remove duplication', function () {

  function removeDuplication(arr){
    var obj = {};
    arr.forEach(el => { obj[el] = (obj[el] || 0) + 1; });

    return Object.getOwnPropertyNames(obj).filter((n) => (obj[n] === 1));
  }

  function removeDuplication2(arr){
    return arr.filter((e) => {
      return arr.indexOf(e) === arr.lastIndexOf(e);
    });
  }

  it("Fixed Tests", () => {
    assert.deepEqual(removeDuplication([1,2,3,2,4,6,2,6,7]), [1,3,4,7]);
    assert.deepEqual(removeDuplication([1,2,1,2,1,1,2,2]), []);
    assert.deepEqual(removeDuplication([2,5,6,7,5,2,6]), [7]);

    assert.deepEqual(removeDuplication2([1,2,3,2,4,6,2,6,7]), [1,3,4,7]);
    assert.deepEqual(removeDuplication2([1,2,1,2,1,1,2,2]), []);
    assert.deepEqual(removeDuplication2([2,5,6,7,5,2,6]), [7]);
  });

});
