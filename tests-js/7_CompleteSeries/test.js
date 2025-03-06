const {assert} = require('chai');

describe('Kyu 7: Complete Series', function () {

  function completeSeries(arr) {
    if (arr.length != (new Set(arr)).size) {
      return [0];
    }

    // var result = [];
    // for (let i = 0, max = Math.max(...arr); i <= max; i++) {
    //   result.push(i);
    // }

    // return result;
    return Array.from({length: Math.max(...arr) + 1}, (v, i) => i);
  }

  let test1 = [0,1],
        test2 = [1,4,6],
        test3 = [3,4,5],
        test4 = [2,1],
        test5 = [1,4,4,6],

        sol1 = [0,1],
        sol2 = [0,1,2,3,4,5,6],
        sol3 = [0,1,2,3,4,5],
        sol4 = [0,1,2],
        sol5 = [0];

  it("Test 1", function() {
    assert.deepEqual(completeSeries(test1), sol1);
  });

  it("Test 2", function() {
    assert.deepEqual(completeSeries(test2), sol2);
  });

  it("Test 3", function() {
    assert.deepEqual(completeSeries(test3), sol3);
  });

  it("Test 4", function() {
    assert.deepEqual(completeSeries(test4), sol4);
  });

  it("Test 5", function() {
    assert.deepEqual(completeSeries(test5), sol5);
  });

});
