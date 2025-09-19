const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Whats my golf score?', function () {

  it('solution1', function () {
    
    function golfScoreCalculator(parList, scoreList){
      var result = 0;
      for(var i = 0; i < parList.length; i++) {
        result += scoreList[i] - parList[i];
      }

      return result;
    }

    assert.strictEqual(golfScoreCalculator('443454444344544443', '353445334534445344'), -1);
    assert.strictEqual(golfScoreCalculator('123456123456123456', '123456123456123456'), 0);

  });

});
