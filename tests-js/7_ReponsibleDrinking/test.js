var assert = require('assert');

describe('Kyu 7: Responsible Drinking', function () {

  function hydrate(s) {
    var glasses = s.match(/\d+/g).reduce((carry, current) => (carry+ +current), 0);
    return glasses + ' glass' + (glasses > 1 ? 'es of water' : ' of water');
  }

  it ("Tests", function(){
    assert.strictEqual(hydrate("1 beer"), "1 glass of water");
    assert.strictEqual(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
    assert.strictEqual(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");
  });

});
