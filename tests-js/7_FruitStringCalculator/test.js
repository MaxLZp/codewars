var assert = require('assert');

describe('Kyu 7: Fruit string calculator', function () {

  function calculate(string) {
    var match = string.match(/(\d+).*(loses|gains)\s(\d+)/);
    return match[2] == 'loses' ? +match[1] - +match[3] : +match[1] + +match[3];
  }

  it('solution1', function () {
    assert.equal(calculate("Panda has 48 apples and loses 4"), 44);
    assert.equal(calculate("Jerry has 34 apples and gains 6"), 40);
  })

});
