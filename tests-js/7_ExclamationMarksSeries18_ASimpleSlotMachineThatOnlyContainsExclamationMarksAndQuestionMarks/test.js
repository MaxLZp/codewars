var assert = require('assert');

describe('Kyu 7: Exclamation marks series #18: a simple slot machine that only contains exclamation marks and question marks', function () {

  it('solution1', function () {
    function slot(s){
      if (/\!{5}|\?{5}/.test(s)) { return 1000; }
      if (/\!{4}|\?{4}/.test(s)) { return 800; }
      if (/^\!{3}\?{2}|^\?{3}\!{2}|\?{2}\!{3}$|\!{2}\?{3}$/.test(s)) { return 500; }
      if (/\!{3}|\?{3}/.test(s)) { return 300; }
      if (/\!{2}.*\!{2}|\?{2}.*\?{2}|\!{2}.*\?{2}|\?{2}.*\!{2}/.test(s)) { return 200; }
      if (/\!{2}|\?{2}/.test(s)) { return 100; }
      return 0;
    }

    assert.deepEqual(slot("!!!!!") , 1000)
    assert.deepEqual(slot("!!!!?") , 800)
    assert.deepEqual(slot("!!!??") , 500)
    assert.deepEqual(slot("!!???") , 500)
    assert.deepEqual(slot("???!!") , 500)
    assert.deepEqual(slot("??!!!") , 500)
    assert.deepEqual(slot("!!!?!") , 300)
    assert.deepEqual(slot("!!?!!") , 200)
    assert.deepEqual(slot("?!!??") , 200)
    assert.deepEqual(slot("!!?!?") , 100)
    assert.deepEqual(slot("!?!?!") , 0)
  });

});
