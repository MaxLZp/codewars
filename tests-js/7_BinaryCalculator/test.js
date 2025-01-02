var {assert} = require('chai');

describe('Kyu 7: Binary Calculator', function () {

  function calculate(n1, n2, o) {
    switch(o) {
      case 'add':      return (parseInt(n1, 2)+parseInt(n2, 2)).toString(2);
      case 'subtract': return (parseInt(n1, 2)-parseInt(n2, 2)).toString(2);
      case 'multiply': return (parseInt(n1, 2)*parseInt(n2, 2)).toString(2);
      default: throw Error('Invalid operation.');
    }
  }

  it("Should return something that isn't falsy", function() {
    assert.strictEqual(calculate('1', '1', 'add'), '10');
    assert.strictEqual(calculate('1', '1', 'subtract'), '0');
    assert.strictEqual(calculate('1', '1', 'multiply'), '1');
    assert.strictEqual(calculate('10', '10', 'multiply'), '100');
    assert.strictEqual(calculate('100', '10', 'subtract'), '10');
    assert.strictEqual(calculate('1', '10', 'subtract'), '-1');
    assert.strictEqual(calculate('10', '100', 'subtract'), '-10');
  });

});
