var assert = require('assert');

describe('Kyu 7: Cats in hats', function () {

  function height(n) {
    return `${(2000000*(Math.pow(1/2.5, n+1) - 1)/(1/2.5 - 1)).toFixed(3)}`;
  }


  assert.strictEqual(height(7), "3331148.800");
  assert.strictEqual(height(0), "2000000.000");

});
