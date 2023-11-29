var assert = require('assert');

describe('Kyu 7: Driving School Series #1', function () {
  it('solution1', function () {

    function passed (list) {
      const passed = list.filter((v) => v <= 18);
      return passed.length ? Math.round(passed.reduce((prev, cur) => prev + cur)/passed.length) : 'No pass scores registered.';
    }

    assert.equal(passed([10,10,10,18,20,20]),12);
    assert.equal(passed([21,22,24]),'No pass scores registered.');
    assert.equal(passed([3,22,9,13,20,18,2,14,20,8,23,12,7,21,21,19,20,11,18,7,13,22,11,20,9]), 10);
    assert.equal(passed([19,16,8,11,25,10,29,22,23]),11);
  });

});
