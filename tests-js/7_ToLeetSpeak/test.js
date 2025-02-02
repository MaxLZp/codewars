var assert = require('assert');

describe('Kyu 7: ToLeetSpeak', function () {

  it('solution1', function () {

    function toLeetSpeak(str) {
      var map = {
        A : '@',
        B : '8',
        C : '(',
        D : 'D',
        E : '3',
        F : 'F',
        G : '6',
        H : '#',
        I : '!',
        J : 'J',
        K : 'K',
        L : '1',
        M : 'M',
        N : 'N',
        O : '0',
        P : 'P',
        Q : 'Q',
        R : 'R',
        S : '$',
        T : '7',
        U : 'U',
        V : 'V',
        W : 'W',
        X : 'X',
        Y : 'Y',
        Z : '2'
      };

      return str.replace(/[A-Z]/g, c => map[c]);
    }

    assert.deepEqual(toLeetSpeak("LEET"), "1337");
    assert.deepEqual(toLeetSpeak("CODEWARS"), "(0D3W@R$");
    assert.deepEqual(toLeetSpeak("HELLO WORLD"), "#3110 W0R1D");
    assert.deepEqual(toLeetSpeak("LOREM IPSUM DOLOR SIT AMET"), "10R3M !P$UM D010R $!7 @M37");
    assert.deepEqual(toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"), "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06");

  });

});
