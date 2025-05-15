var assert = require('assert');

describe('Kyu 7: What comes after?', function () {

  it('solution1', function () {

    function comes_after(str,l) {
      return (str.match(new RegExp(`(?<=${l})[a-z]`, "gi")) || []).join('');
    }

    function comes_after2(str,l) {
      var result = '';
      for (let i = 1; i < str.length; i++) {
        if ( /[a-zA-Z]/.test(str[i]) && str[i-1].toLowerCase() == l.toLowerCase()) {
          result += str[i];
        }
      }

      return result;
    }

    assert.strictEqual(comes_after("are you really learning Ruby?",'r'),'eenu');
    assert.strictEqual(comes_after("Pirates say arrrrrrrrr",'r'),'arrrrrrrr');
    assert.strictEqual(comes_after("Free coffee for all office workers!",'f'),'rfeofi');
    assert.strictEqual(comes_after("Every Sunday, she reads newspapers.",'s'),'uhp');
    assert.strictEqual(comes_after("king kUnta is the sickest rap song ever kNown",'k'),'iUeN');
    assert.strictEqual(comes_after("p8tice makes pottery p_r p0rfect!",'p'),'o');
    assert.strictEqual(comes_after("d8u d._ rly 2d1s",'D'),'');
    assert.strictEqual(comes_after("nothing to be found here",'z'),'');

  });

});
