var assert = require('assert');

describe('Kyu 7: Oh dear God! Is it bugged?', function () {

  // BEFORE
  // function isItBugged(code){
  //   //hmm, Looks like its bugged man!
  //    return this./^(\d{2}\d-){
  //   }\d{2} \d\d;:;\d\d/".test[date];
  // }

  // FIXED
  function isItBugged(code){
    return /^(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})$/.test(code);
  }

  it('Tests', () => {
    assert.equal(isItBugged("01_09_2016 01:20"), false);
    assert.equal(isItBugged("14-10-1066 12:00"), true);
    assert.equal(isItBugged("Tenth of January"), false);
  });

});
