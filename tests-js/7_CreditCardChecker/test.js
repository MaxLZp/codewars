var assert = require('assert');

describe('Kyu 7: Credit Card Checker', function () {

  it('solution1', function () {

    function validCard(card){
      var num = [...card.replace(/\s/g, '')].reverse().slice(1).map(Number);
      var sum = num.reduce((c, v, i) => {
        if (i & 1) {
          c += v;
        } else {
          var n = v * 2;
          c += n > 9 ? n - 9 : n;
        }

        return c;
      }, 0);

      return card[card.length - 1] == (10 - (sum % 10)) % 10;
    }

    assert.equal(validCard("3333 3333 3333 3331"), true);
    assert.equal(validCard("5457 1111 9323 4311"), false);
    assert.equal(validCard("5457 6238 9323 4311"), false);
    assert.equal(validCard("5457 6238 9823 4311"), true);
    assert.equal(validCard("2222 2222 2222 2224"), true);
    assert.equal(validCard("1234 5678 9012 3452"), true);
    assert.equal(validCard("9999 9999 9999 9995"), true);
    assert.equal(validCard("1252 6238 9323 4311"), false);
    assert.equal(validCard("5457 1125 9323 4311"), false);
    assert.equal(validCard("6666 6666 6666 6664"), true);
    assert.equal(validCard("5457 6238 0254 4311"), false);
    assert.equal(validCard("5457 6238 9323 4311"), false);
    assert.equal(validCard("5457 6238 1251 4311"), false);
    assert.equal(validCard("5457 6238 9323 1252"), false);
    assert.equal(validCard("5457 6238 5568 4311"), false);
    assert.equal(validCard("8888 8888 8888 8888"), true);
    assert.equal(validCard("1145 6238 9323 4311"), false);
    assert.equal(validCard("4444 4444 4444 4448"), true);
    assert.equal(validCard("5458 4444 9323 4311"), false);
    assert.equal(validCard("5457 6238 9823 4311"), true);
    assert.equal(validCard("5457 6238 3333 4311"), false);
    assert.equal(validCard("5555 5555 5555 5557"), true);
    assert.equal(validCard("8895 6238 9323 4311"), false);
    assert.equal(validCard("0123 4567 8901 2345"), false);
    assert.equal(validCard("0000 0000 0000 0000"), true);
    assert.equal(validCard("0025 2521 9323 4311"), false);
    assert.equal(validCard("0000 0300 0000 0000"), false);
    assert.equal(validCard("1111 1111 1111 1117"), true);

  });

});
