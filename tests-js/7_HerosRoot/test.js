var assert = require('assert');

describe('Kyu 7: Hero\'s root', function () {

  it('solution1', function () {
    function intRac(n, guess) {
      let step = 0;
      let pguess = guess;
      do {
        step++;
        pguess = guess;
        guess = Math.floor(( guess + n/guess ) / 2);
      } while ( Math.abs(pguess - guess) >= 1 )
      return step;
    };

    assert.strictEqual(intRac(1, 1), 1)
    assert.strictEqual(intRac(25, 1), 4)
    assert.strictEqual(intRac(125348, 300), 3)
  });

});
