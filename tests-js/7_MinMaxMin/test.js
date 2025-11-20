var assert = require('assert');

describe('Kyu 7: MinMaxMin: Bounded Nums', function () {

  function minMinMax(array) {
    array.sort((l, r) => l - r);
    var abs = array[0];
    while(array.includes(abs)) {abs++;}

    return [
      array[0],
      abs,
      array[array.length - 1]
    ]
  }

  it("test", () => {
    
    assert.deepEqual(minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24]);
    assert.deepEqual(minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8]);
    assert.deepEqual(minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9]);
    
  });

});
