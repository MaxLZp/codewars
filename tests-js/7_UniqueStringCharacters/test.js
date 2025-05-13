var assert = require('assert');

describe('Kyu 7: Unique string characters', function () {

  it('solution1', function () {

    function solve(a,b){
      var missingInA = a.matchAll(new RegExp(`[^${b}]`, 'g'));
      var missingInB = b.matchAll(new RegExp(`[^${a}]`, 'g'));

      return [...missingInA, ...missingInB].join('');
    };

    assert.strictEqual(solve("xyab","xzca"),"ybzc");
    assert.strictEqual(solve("xyabb","xzca"),"ybbzc");
    assert.strictEqual(solve("abcd","xyz"),"abcdxyz");
    assert.strictEqual(solve("xxx","xzca"),"zca");

  });

});
