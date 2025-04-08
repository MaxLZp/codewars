var assert = require('assert');

describe('Kyu 7: Find the calculation type', function () {

  function calcType(a, b, res) {
    if (res == a + b) { return 'addition'; }
    if (res == a * b) { return 'multiplication'; }
    if (res == a - b) { return 'subtraction'; }
    return 'division';

    /*
      ({[a + b]: `addition`,
        [a - b]: `subtraction`,
        [a * b]: `multiplication`,
        [a / b]: `division`
      })[res];
    */
  }

  it("addition", function () {
    assert.strictEqual(calcType(1, 2, 3), 'addition');
  });
  it("multiplication", function () {
    assert.strictEqual(calcType(10, 4, 40), 'multiplication');
  });
  it("subtraction", function () {
    assert.strictEqual(calcType(10, 5, 5), 'subtraction');
  });
  it("division", function () {
    assert.strictEqual(calcType(9, 5, 1.8), 'division');
  });

});

