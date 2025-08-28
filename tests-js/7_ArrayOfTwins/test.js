const assert = require("assert");

describe('Kyu 7: Array of twins', function () {

  function twins(myArray){
    var counter = myArray.reduce((c, num) => {
      if (!c.hasOwnProperty(num)) { c[num] = 0; }
      c[num]++;
      return c;
    }, {});

    return Object.getOwnPropertyNames(counter).every(p => counter[p] == 2);
  }

  it("Basic tests", () => {
    assert.equal(twins([1,2,3,1,2,3]), true);
    assert.equal(twins([33,5,17,5]), false);
    assert.equal(twins([2,16,2,17,2,16]), false);

    assert.equal(twins([
      82, 95,  1, 82, 82, 95, 20,
      34, 68, 37, 34,  6, 59, 59,
      82, 37,  6, 20,  1, 68
    ]), false);
  });

});
