var assert = require('assert');

describe('Kyu 7: Uglify Word', function () {

  it('solution1', function () {

    function uglifyWord(s) {
      var flag = 1;
      var result = '';
      for (let i = 0; i < s.length; i++) {
        if (/[a-z]/i.test(s[i])) {
          result += flag ? s[i].toUpperCase() : s[i].toLowerCase();
          flag = !flag;
        } else {
          result += s[i];
          flag = 1;
        }
      }

      return result;
    }

    assert.strictEqual(uglifyWord("AAA"), "AaA");
    assert.strictEqual(uglifyWord("AaA"), "AaA");
    assert.strictEqual(uglifyWord("BbB"), "BbB");
    assert.strictEqual(uglifyWord("aaa-bbb-ccc"), "AaA-BbB-CcC");
    assert.strictEqual(uglifyWord("AaA-BbB-CcC"), "AaA-BbB-CcC");
    assert.strictEqual(uglifyWord("eeee-ffff-gggg"), "EeEe-FfFf-GgGg");
    assert.strictEqual(uglifyWord("EeEe-FfFf-GgGg"), "EeEe-FfFf-GgGg");
    assert.strictEqual(uglifyWord("qwe123asdf456zxc"), "QwE123AsDf456ZxC");
    assert.strictEqual(uglifyWord("Hello World"), "HeLlO WoRlD");

  });

});
