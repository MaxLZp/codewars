var assert = require('assert');

describe('Kyu 7: Find the vowels', function () {

  it("Solution 1", () => {
    function vowelIndices(word){
      var res = [];
      word = word.toLowerCase();
      for (let index = 0; index < word.length; index++) {
        if ('aeiouy'.indexOf(word[index]) != -1) {
          res.push(index+1);
        }
      }
      return res;
    }

    assert.deepEqual(vowelIndices("mmm"), []);
    assert.deepEqual(vowelIndices("apple"), [1,5]);
    assert.deepEqual(vowelIndices("super"), [2,4]);
    assert.deepEqual(vowelIndices("orange"), [1,3,6]);
    assert.deepEqual(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
  })

  it("Solution 2", () => {
    function vowelIndices(word){
      var res = [];
      for (let index = 0; index < word.length; index++) {
        if (/[aeiouy]/i.test(word[index])) {
          res.push(index+1);
        }
      }
      return res;
    }

    assert.deepEqual(vowelIndices("mmm"), []);
    assert.deepEqual(vowelIndices("apple"), [1,5]);
    assert.deepEqual(vowelIndices("super"), [2,4]);
    assert.deepEqual(vowelIndices("orange"), [1,3,6]);
    assert.deepEqual(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
  })

});
