var assert = require('assert');

describe('Kyu 7: Left$ and Right$', function () {
  it('solution1', function () {

    function left$( str, i ) {
      if ( i === undefined ) { i = 1; }
      if ( typeof(i) == 'string' ) { i = str.indexOf(i); }

      return str.slice(0, i);
    }

    function right$( str, i ){
      if ( i === undefined ) { i = 1; }
      if ( typeof(i) == 'string' ) { i = str.length - str.lastIndexOf(i) - i.length; }

      return i ? str.slice(-1*i) : ''
    }

    assert.equal( left$('Hello o o o  World', 5), 'Hello');
    assert.equal(right$('Hello o o o  World', 5), 'World');
    assert.equal( left$('Hello o o o  World', 1), 'H');

    assert.equal( left$('Hello o o o  World', 0), '');
    assert.equal( right$('Hello o o o  World', 0), '');
    assert.equal( left$('Hello o o o  World'), 'H');
    assert.equal( right$('Hello o o o  World'), 'd');

    assert.equal( left$("Don't Repeat Yourself",' '), "Don't");
    assert.equal( left$("Don't Repeat Yourself",' Repeat'), "Don't","other string may be longer than 1 char");
    assert.equal( right$("Don't Repeat Yourself", ' '), 'Yourself');
    assert.equal( right$("Don't Repeat Yourself", 'Repeat '), 'Yourself');

  });

});
