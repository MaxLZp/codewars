var assert = require('assert');

describe('Kyu 7: Tidy Number (Special Numbers Series #9)', function () {
  it('solution1', function () {

    assert.equal(tidyNumber(12),true);
    assert.equal(tidyNumber(102),false);
    assert.equal(tidyNumber(9672),false);
    assert.equal(tidyNumber(2789),true);
    assert.equal(tidyNumber(2335),true);

    function tidyNumber(n){
      const arr = `${n}`.split('');
      for (let index = 0; index < arr.length-1; index++) {
        if (arr[index] > arr[index+1]) { return false; }
      }
      return true;
    }
  });

});
