var assert = require('assert');

describe('Kyu 7: Running out of space', function () {

  it('solution1', function () {

    function spacey(array){
      return array.map((v, i, a) => (a.slice(0, i+1).join('')));
    }

    assert.deepEqual(spacey(['kevin', 'has','no','space']), [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
    assert.deepEqual(spacey(['this','cheese','has','no','holes']), ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);

  })

});
