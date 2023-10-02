var assert = require('assert');

describe('Kyu 7: Check three and two', function () {

  it('solution1', function () {
    function checkThreeAndTwo(array){
      let two = 0;
      let three = 0;
      [...(new Set(array))].forEach(element => {
        const len = array.join('')
          .match(new RegExp(`${element}`, 'gi'))
          .length;
        if (len == 2) {two++;}
        if (len == 3) {three++;}
      });

      return two > 0 && three > 0;
    };

    assert.equal(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true );
    assert.equal(checkThreeAndTwo(["a", "c", "a", "c", "b"]), false );
    assert.equal(checkThreeAndTwo(["a", "a", "a", "a", "a"]), false );
  });

});
