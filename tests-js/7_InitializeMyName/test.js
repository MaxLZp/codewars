var assert = require('assert');

describe('Kyu 7: Initialize my name', function () {

  it('solution1', function () {

    function initializeNames(name){
      return name = name.split(/\s/)
        .map((v, i, a) => (
          (i == 0 || i == a.length - 1)
            ? v
            : v[0]+'.'
        )).join(' ');
    }

    assert.equal(initializeNames('Jack Ryan'), 'Jack Ryan', '');
    assert.equal(initializeNames('Lois Mary Lane'), 'Lois M. Lane', '');
    assert.equal(initializeNames('Dimitri'), 'Dimitri', '');
    assert.equal(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis', '');

  });


  it('solution2', function () {

    function initializeNames(name){
      return name.replace(/ (\w)\w*(?= )/g, ' $1.');
    }

    assert.equal(initializeNames('Jack Ryan'), 'Jack Ryan', '');
    assert.equal(initializeNames('Lois Mary Lane'), 'Lois M. Lane', '');
    assert.equal(initializeNames('Dimitri'), 'Dimitri', '');
    assert.equal(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis', '');

  });

});
