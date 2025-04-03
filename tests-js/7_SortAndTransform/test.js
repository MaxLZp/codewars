var assert = require('assert');

describe('Kyu 7: Sort and Transform', function () {

  function sortTransform(a){
    var letter = (code) => String.fromCharCode(code);
    var elements = (a) => [a[0], a[1], a[a.length-2], a[a.length-1]];

    var w = [];
    w.push(elements(a).map(letter).join(''));
    a.sort((l,r) => +l - +r);
    w.push(elements(a).map(letter).join(''));
    a.sort((l,r) => +r - +l);
    w.push(elements(a).map(letter).join(''));
    a = a.map(letter).sort();
    w.push(elements(a).join(''));

    return w.join('-');
  }

  it('solution1', function () {
    assert.strictEqual(sortTransform([121, 122, 123, 124, 125, 120, 122, 132]), 'yzz-xy}-}yx-xy}');
    assert.strictEqual(sortTransform([111, 112, 113, 114, 115, 113, 114, 110]), 'oprn-nors-sron-nors');
    assert.strictEqual(sortTransform([51, 62, 73, 84, 95, 100, 99, 126]), '3>c~-3>d~-~d>3-3>d~');
  });

});
