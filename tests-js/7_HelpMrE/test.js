var assert = require('assert');

describe('Kyu 7: Help Mr. E', function () {

  function evenator(str) {
    return str.replace(/[.,?!_]+/g, '').replace(/\w+/g, (w) => {
      return w.length % 2 == 0 ? w : w+w.charAt(w.length-1);
    });
  }

  it('Even Tests', () => {
    assert.equal(evenator(''),'','Should return empty');
    assert.equal(evenator('tHiS sEnTeNcE iS eVeN.'),'tHiS sEnTeNcE iS eVeN','This sentence is even so return as is');
    assert.equal(evenator('even'),'even','This sentence is even so return as is')
    assert.equal(evenator('even od!'),'even od','This sentence is even so return as is');
    assert.equal(evenator('even oddd.'),'even oddd','This sentence is even so return as is');
    assert.equal(evenator('underscore is not considered a word..in this case,'), 'underscore is nott considered aa wordin this case');
  });

  it('Odd Tests', () => {
    assert.equal(evenator('f'),'ff','');
    assert.equal(evenator('I got a hole in 1!'),'II gott aa hole in 11','');
    assert.equal(evenator('evenn'),'evennn','')
    assert.equal(evenator('even odd!'),'even oddd','');
    assert.equal(evenator('eve odd.'),'evee oddd','');
  });

});
