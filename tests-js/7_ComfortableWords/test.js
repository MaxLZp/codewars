var assert = require('assert');

describe('Kyu 7: Comfortable words', function () {

  // const comfortableWord = word => {
  //   const left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
  //   const right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];

  //   for (let i = 1; i < word.length; i++) {
  //     if (
  //       (left.includes(word[i]) && left.includes(word[i-1]))
  //       ||
  //       (right.includes(word[i]) && right.includes(word[i-1]))
  //     ) {
  //       return false;
  //     }
  //   }

  //   return true;
  // };

  const comfortableWord = word => {
    word = word.replace(/[qwertasdfgzxcvb]/gi, '1');
    word = word.replace(/[yuiophjklnm]/gi, '0');

    return !(/11/.test(word) || /00/.test(word));
  };

  it('should return true for comfortable words', () => {
    let word = 'yams';
    assert.equal(comfortableWord(word), true, `${word} is a comfortable word!`);
  });

  it('should return false for uncomfortable words', () => {
    let word = 'test';
    assert.equal(comfortableWord(word), false, `${word} is NOT a comfortable word!`);
  });

});
