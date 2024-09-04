var assert = require('assert');

describe('Kyu 7: Run your String', function () {

  it('solution1', function () {

    function runYourString (arg, obj) {
      return new Function(obj.param, obj.func)(arg);
    }

    assert.equal(runYourString(true, {param: 'val', func: 'return val'}), true)
    assert.equal(runYourString({}, {param: 'a', func: 'return typeof a'}), 'object')
  })

});
