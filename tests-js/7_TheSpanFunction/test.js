const assert = require("assert");

describe("The Span Function",() => {

  function span(arr, predicate) {
    for(var idx = 0; idx < arr.length && predicate(arr[idx]); idx++) { }

    return [arr.slice(0, idx), arr.slice(idx)];
  }

      
  // Functions for use in tests
  function isEven(x) {
    return Math.abs(x) % 2 === 0;
  }
  
  function isOdd(x) {
    return Math.abs(x) % 2 !== 0;
  }
  
  // Arrays for use in tests
  var arr1 = [2,4,6,1,4,8];
  var arr2 = [1,4,5,7,6];
  var arr3 = [13,17,19,11,21];
  
  it("should be defined", function () {
    function tr() { return true; }
    
    assert.deepEqual(span([], tr), [[], []]);
  });
  
  it("should work when testing for even numbers", function () {
    assert.deepEqual(span(arr1, isEven), [[2,4,6],[1,4,8]]);
  });
  
  it("should work when the first element results in false", function () {
    assert.deepEqual(span(arr2, isEven), [[], arr2]);
  });
  
  it("should work when no element results in false", function () {
    assert.deepEqual(span(arr3, isOdd), [arr3,[]]);
  });

});
