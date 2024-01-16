var assert = require('assert');

describe('Kyu 7: Especially Joyful Numbers', function () {

  it('solution1', function () {
    function numberJoy(n) {
        var digits = `${n}`.split('');
        // Not a Harshad number
        if (n % digits.length != 0) {
          false;
        }

        digits = digits.reduce((carry , cur) => (carry += +cur), 0);
        return digits*`${digits}`.split('').reverse().join('') == n;
    }

    assert.strictEqual(numberJoy(1997), false, 'Not a Harshad number')
    assert.strictEqual(numberJoy(1998), false, 'Harshad but digit sum=27, and 27x72 does not equal 1998')
    assert.strictEqual(numberJoy(1729), true, 'Harshad and digit sum=19, and 19x91 = 1729')
    assert.strictEqual(numberJoy(18), false, 'Harshad but digit sum=9, and 9x9 does not equal 18')
    assert.strictEqual(numberJoy(1), true, "It was correct")
    assert.strictEqual(numberJoy(81), true, "It was correct")
    assert.strictEqual(numberJoy(1458), true, "It was correct")
  });

});
