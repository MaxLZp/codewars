var assert = require('assert');

describe('Kyu 7: Unscrambled eggs', function () {

  it('solution1', function () {

    function unscrambleEggs(word){
      return word.replace(/egg/g, '');
    }

    assert.equal(unscrambleEggs("ceggodegge heggeregge"), "code here");
    assert.equal(unscrambleEggs("FeggUNegg KeggATeggA"), "FUN KATA");

  });

});
