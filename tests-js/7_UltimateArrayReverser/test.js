const { assert } = require('chai');

describe('Kyu 7: Ultimate Array Reverser', function () {

  it('solution1', function () {

    const ultimateReverse = s => {
      var joined = s.join('').split('').reverse().join('');

      return s.map((e, i) => {
        var slice = joined.slice(0, e.length);
        joined = joined.slice(e.length);

        return slice;
      });
    };

    assert.deepEqual(
      ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]),
      ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
    );
    
    assert.deepEqual(
      ultimateReverse(
        ["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer", 
         "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"]
      ),
      ["How", "many", "shrimp", "do", "you", "have", "to", "eat",
       "before", "your", "skin", "starts", "to", "turn", "pink?"]
    );

  });

});
