var assert = require('assert');

describe('Kyu 8: Training JS #18: Methods of String object--concat() split() and its good friend join()', function () {
  it('solution1', function () {

    assert.strictEqual(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
    assert.strictEqual(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
    assert.strictEqual(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
    assert.strictEqual(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");

    function splitAndMerge(string, separator) {
      return string.split(' ').map((word) => {
        return word.split('').join(separator)
      }).join(' ');
    }
  });
});
