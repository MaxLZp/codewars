var assert = require('assert');

describe('Kyu 7: Find the area of the rectangle!', function () {

  it('solution1', function () {

    function area(d,l){
      return d <= l ? 'Not a rectangle' : +((l * (Math.sqrt( d**2 - l**2))).toFixed(2));
      //ver 2
      // return d <= l ? 'Not a rectangle' : Math.round((l * (Math.sqrt( d**2 - l**2))) * 100)/100;
    }

    assert.equal(area(5,4), 12);
    assert.equal(area(10,6), 48);
    assert.equal(area(13,5), 60);
    assert.equal(area(12,5), 54.54);

  });

});
