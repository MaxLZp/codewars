var assert = require('assert');

describe('Kyu 7: Converting integer to currency format', function () {

  it('solution1', function () {
    
    function toCurrency(price){
      var m = `${price}`.match(/^(\d?\d?)((?:\d{3})+)$/);
      var d = [m[1]];
      for (let i = 0; i < m[2].length; i += 3) {
        d.push(m[2].slice(i, i + 3));
      }

      return d.filter(e => e).join(',');
    }
    
    // function toCurrency(price){
    //   return price.toLocaleString();
    // }

    assert.strictEqual(toCurrency(123456), "123,456");
    assert.strictEqual(toCurrency(1234), "1,234");
    assert.strictEqual(toCurrency(123), "123");
    assert.strictEqual(toCurrency(123456789012), "123,456,789,012");

  });

});
