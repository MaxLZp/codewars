var assert = require('assert');

describe('Kyu 7: Paperboy', function () {

  it('Test', () => {

    function cheapestQuote(newspapers) {
      var prices = [
        [3.85, 40],
        [1.93, 20],
        [0.97, 10],
        [0.49, 5],
        [0.10, 1],
      ];
      var _newspapers = newspapers;
      var quote = 0;
      prices.forEach(price => {
        quote += Math.floor(_newspapers / price[1]) * price[0];
        _newspapers %= price[1];
      });

      return +quote.toFixed(2);
    }

    assert.equal(cheapestQuote(40), 3.85);
    assert.equal(cheapestQuote(20), 1.93);
    assert.equal(cheapestQuote(10), 0.97);
    assert.equal(cheapestQuote(5), 0.49);
    assert.equal(cheapestQuote(1), 0.10);
    assert.equal(cheapestQuote(41), 3.95, '41 newspapers should be priced as 40 bundle and a 1 bundle');
    assert.equal(cheapestQuote(80), 7.70, '80 newspapers should be priced as two 40 bundles');
    assert.equal(cheapestQuote(26), 2.52, '26 newspapers should be priced as a 20 bundle, a 5 bundle and a 1 bundle');

  });

});

