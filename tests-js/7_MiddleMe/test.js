var assert = require('assert');

describe('Kyu 7: Middle Me', function () {

  function middleMe(N, X, Y){
    //get a working solution then try to make it less than 70 characters!
    return N % 2 == 0 ? Y[0].repeat(N / 2)+X+Y[0].repeat(N / 2) : X;
  }

  it("tests", function() {
    assert.equal(middleMe(18, 'z', '#'), '#########z#########');
    assert.equal(middleMe(19, 'z', '#'), 'z');
  });

});
