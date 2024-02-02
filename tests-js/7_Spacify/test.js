var {assert} = require('chai');

describe('Kyu 7: Spacify', function () {

  it('solution1', function () {
    function spacify(str) {
      return str.replace(/(.)/g, ' $1').trim();
    }
    assert.equal(spacify('hello world'),'h e l l o   w o r l d');
    assert.equal(spacify('12345'),'1 2 3 4 5');
  });

  it('solution2', function () {
    function spacify(str) {
      return str.split('').join(' ');
    }
    assert.equal(spacify('hello world'),'h e l l o   w o r l d');
    assert.equal(spacify('12345'),'1 2 3 4 5');
  });

});
