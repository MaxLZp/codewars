const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Drawing a Cross!', function () {
  it('solution1', function () {

    function drawACross(n) {
      if (n < 3) { return "Not possible to draw cross for grids less than 3x3!"; }
      if (!(n & 1)) { return "Centered cross not possible!"; }

      var res = [];
      for (let i = 0; i < n; i++) {
        var str = '';
        for (let j = 0; j < n; j++) {
          if (j == i || j == n - 1 - i) {
            str += 'x';
          } else {
            str += ' ';
          }
        }
        res.push(str);
      }

      return res.join("\n");
    }

    assert.strictEqual(drawACross(7), 'x     x\n x   x \n  x x  \n   x   \n  x x  \n x   x \nx     x', 'Should draw a centered cross in a grid of height and width n!')
    assert.strictEqual(drawACross(15), 'x             x\n x           x \n  x         x  \n   x       x   \n    x     x    \n     x   x     \n      x x      \n       x       \n      x x      \n     x   x     \n    x     x    \n   x       x   \n  x         x  \n x           x \nx             x', 'Should draw a centered cross in a grid of height and width n!')
    assert.strictEqual(drawACross(25), 'x                       x\n x                     x \n  x                   x  \n   x                 x   \n    x               x    \n     x             x     \n      x           x      \n       x         x       \n        x       x        \n         x     x         \n          x   x          \n           x x           \n            x            \n           x x           \n          x   x          \n         x     x         \n        x       x        \n       x         x       \n      x           x      \n     x             x     \n    x               x    \n   x                 x   \n  x                   x  \n x                     x \nx                       x', 'Should draw a centered cross in a grid of height and width n!')
    assert.strictEqual(drawACross(6), 'Centered cross not possible!', 'If a centred cross is not possible, display the correct error message!')
    assert.strictEqual(drawACross(10), 'Centered cross not possible!', 'If a centred cross is not possible, display the correct error message!')
    assert.strictEqual(drawACross(2), 'Not possible to draw cross for grids less than 3x3!', 'Numbers less than three should return the correct error message')

  });

});
