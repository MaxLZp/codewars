var assert = require('assert');

describe('Kyu 7: Get the Middle Character', function () {

  it('solution1', function () {
    function getMiddle(s)
    {
      const middle = s.length / 2;
      if (s.length % 2 == 0) { return s.slice(middle-1, middle+1) }
      return s[Math.floor(middle)];
    }


    assert.equal(getMiddle("test"),"es");
    assert.equal(getMiddle("testing"),"t");
    assert.equal(getMiddle("middle"),"dd");
    assert.equal(getMiddle("A"),"A");
  });

});
