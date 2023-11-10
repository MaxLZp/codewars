var assert = require('assert');

describe('Kyu 7: Closest to Zero', function () {

  function closest(arr){
    if (arr.indexOf(0) >= 0) {return 0;}
    arr = [...new Set(arr)]
    let closest = arr[0];
    let closestCount = 1;
    for (let index = 1; index < arr.length; index++) {
      if (Math.abs(arr[index]) <= Math.abs(closest)) {
        if (-arr[index] == closest) {closestCount++; continue;}
        closest = arr[index];
      }
    }
    return closestCount > 1 ? null : closest;
  }
  it('Simple', function () {
    assert.equal(closest([10, 3, 9, 1]), 1)
    assert.equal(closest([2, 4, -1, -3]), -1)
    assert.equal(closest([13, 0, -6]), 0)
  })

  it("should return None for 'doubles'", () =>{
    assert.equal(closest([5, 1, -1, 2, -10]), null)
    assert.equal(closest([5, 11, 11, 2, -1, 1]), null)
  })

  it("Should return unique closest value", () =>{
    assert.equal(closest([-321, -215, -215]), -215)
    assert.equal(closest([ -300, 434, -537, 618, -884, 329, -249 ]), -249)
  })

});

describe('Kyu 7: Closest to Zero. Solution2', function () {

  function closest(arr){
    arr = [...new Set(arr)].sort(function(l, r) { return Math.abs(l) - Math.abs(r)});
    return Math.abs(arr[0]) == Math.abs(arr[1]) ? null : arr[0];
  }

  it('Simple', function () {
    assert.equal(closest([10, 3, 9, 1]), 1)
    assert.equal(closest([2, 4, -1, -3]), -1)
    assert.equal(closest([13, 0, -6]), 0)
  })

  it("should return None for 'doubles'", () =>{
    assert.equal(closest([5, 1, -1, 2, -10]), null)
    assert.equal(closest([5, 11, 11, 2, -1, 1]), null)
  })

  it("Should return unique closest value", () =>{
    assert.equal(closest([-321, -215, -215]), -215)
    assert.equal(closest([ -300, 434, -537, 618, -884, 329, -249 ]), -249)
  })

});
