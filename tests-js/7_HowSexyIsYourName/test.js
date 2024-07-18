const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: How sexy is your name?', function () {

  function sexyName(name) {
    var SCORES = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
    'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
    'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
    'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23};

    var score = [...name.replace(/[^a-zA-Z]/g, '').toUpperCase()]
      .reduce((c, e) => (c + (SCORES.hasOwnProperty(e) ? SCORES[e] : 0)), 0);

    if (score >= 600) { return 'THE ULTIMATE SEXIEST'; }
    if (score > 300) { return 'VERY SEXY'; }
    if (score > 60) { return 'PRETTY SEXY'; }
    return 'NOT TOO SEXY';
  }

  it("Not too sexy!", () => {
    assert.strictEqual(sexyName('GUV'), 'NOT TOO SEXY')
    assert.strictEqual(sexyName('PHUG'),"NOT TOO SEXY")
    assert.strictEqual(sexyName('FFFFF'), 'NOT TOO SEXY')
    assert.strictEqual(sexyName(''),"NOT TOO SEXY")
    assert.strictEqual(sexyName('PHUG'),"NOT TOO SEXY")
  })
  it("Pretty sexy!", () => {
    assert.strictEqual(sexyName('BOB'),"PRETTY SEXY")
    assert.strictEqual(sexyName('JLJ'), 'PRETTY SEXY')
    assert.strictEqual(sexyName('HHHHHU'), 'PRETTY SEXY')
    assert.strictEqual(sexyName('BOB'),"PRETTY SEXY")
    assert.strictEqual(sexyName('WWWWWU'),"PRETTY SEXY")
  })
  it("Very sexy!", () => {
    assert.strictEqual(sexyName('YOU'), 'VERY SEXY')
    assert.strictEqual(sexyName('FABIO'),"VERY SEXY")
    assert.strictEqual(sexyName('ARUUUUUUUUU'), 'VERY SEXY')
  })
  it("The utlimate sexiest!", () => {
    assert.strictEqual(sexyName('ROBBY'), 'THE ULTIMATE SEXIEST')
    assert.strictEqual(sexyName('SAMANTHA'), 'THE ULTIMATE SEXIEST')
    assert.strictEqual(sexyName('DONALD TRUMP'), "THE ULTIMATE SEXIEST")
    assert.strictEqual(sexyName('BILL GATES'), "THE ULTIMATE SEXIEST")
    assert.strictEqual(sexyName('SCARLETT JOHANSSON'), "THE ULTIMATE SEXIEST")
    assert.strictEqual(sexyName('CODEWARS'),"THE ULTIMATE SEXIEST")
    assert.strictEqual(sexyName('PAMELA ANDERSON'),"THE ULTIMATE SEXIEST")
  })

});
