var assert = require('assert');

describe('Kyu 7: Alternating between three values', function () {
  it('solution1', function () {

    assert.equal( f( 3, { a:3, b:4, c:5 } ), 4 );
    assert.equal( f( 4, { a:3, b:4, c:5 } ), 5 );
    assert.equal( f( 5, { a:3, b:4, c:5 } ), 3 );

    function f(x, cc) {
      var cca = Object.values(cc);
      cca.push(cca[0]);
      return cca[cca.indexOf(x)+1];
    }
  });

});
