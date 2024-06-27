var assert = require('assert');

describe('Kyu 7: Most Likely', function () {

  function mostLikely(prob1,prob2){
    return +eval(prob1.replace(':','/')) > +eval(prob2.replace(':','/'));
  }

  assert.equal(mostLikely('1:3','1:2'),false);

});
