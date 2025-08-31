var {assert} = require('chai');

describe('Kyu 7: Split string by multiple delimiters', function () {

  it('solution1', function () {

    function multipleSplit(string, delimiters=[]){
      return string.split(new RegExp(`[${delimiters.join('\\')}]`)).filter(e => e);
    }

    assert.deepEqual(multipleSplit('Hi everybody!', [' ', '!']), ['Hi', 'everybody']);
    assert.deepEqual(multipleSplit('(1+2)*6-3^9', ['+', '-', '(', ')', '^', '*']), ['1', '2', '6', '3', '9']);
    assert.deepEqual(multipleSplit('Solve_this|kata-very\\quickly!', ['!', '|', '\\', '_', '-']), ['Solve', 'this', 'kata', 'very', 'quickly']);

  });

});
