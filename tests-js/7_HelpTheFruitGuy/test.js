var assert = require('assert');

describe('Kyu 7: Help the Fruit Guy', function () {

  it('solution1', function () {
    function removeRotten(bagOfFruits){
      if (! bagOfFruits) return [];
      return bagOfFruits.map((fruit) => {
        return fruit.replace(/rotten/g, '').toLowerCase();
      });
    }

    assert.deepStrictEqual(removeRotten(["apple","rottenBanana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
    assert.deepStrictEqual(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
    assert.deepStrictEqual(removeRotten([]), [])
  });

});
