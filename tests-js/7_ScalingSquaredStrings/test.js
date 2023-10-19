var assert = require('assert');

describe('Kyu 7: Scaling Squared Strings', function () {
  it('solution1', function () {

    function scale(strng, k, n) {
      if (strng == '') { return '';}
      let a = strng.split("\n")
        .map((e) => {
          e = e.split('').map((c) => {
            let cv = '';
            for (let index2 = 0; index2 < k; index2++) {
              cv += c;
            }
            return cv;
          }).join('');

          let r = '';
          for (let index1 = 0; index1 < n - 1; index1++) {
            r += e + '\n';
          }
          return r + e;
        })
        .join('\n');
      return a;
    }

    var a = "abcd\nefgh\nijkl\nmnop";
    var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
    assert.equal(scale(a, 2, 3), r);
    assert.equal(scale("", 5, 5), "");
    assert.equal(scale("Kj\nSH", 1, 2),"Kj\nKj\nSH\nSH");
  })

  it('solution2', function () {

    function scale(strng, k, n) {
      if (strng == '') { return '';}
      let a = strng.split("\n")
        .map((e) => {
          e = e.split('').map((c) => { return c.repeat(k); }).join('');
          return (e + '\n').repeat(n).replace(/\n$/, '');
        })
        .join('\n');
      return a;
    }

    var a = "abcd\nefgh\nijkl\nmnop";
    var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
    assert.equal(scale(a, 2, 3), r);
    assert.equal(scale("", 5, 5), "");
    assert.equal(scale("Kj\nSH", 1, 2),"Kj\nKj\nSH\nSH");
  })
});
