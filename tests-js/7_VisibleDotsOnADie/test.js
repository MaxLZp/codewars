var assert = require('assert');

describe('Kyu 7: Visible Dots On a Die', function () {

  it('solution1', function () {

    assert.equal(totalAmountVisible(3, 6), 17);
    assert.equal(totalAmountVisible(3, 8), 30);
    assert.equal(totalAmountVisible(1, 12), 66);

    function totalAmountVisible(topNum, numOfSides){
      return ((numOfSides*(1+numOfSides))/2 - (numOfSides+1 - topNum));
    }
  });

});
