var assert = require('assert');

describe('Kyu 7: Training JS #27: methods of arrayObject---filter()', function () {

  function countGrade(scores){
    var result = {S:0, A:0, B:0, C:0, D:0, X:0};
    for(score of scores) {
      if (score == 100) { result['S']++; }
      if (score < 100 && score >= 90) { result['A']++; }
      if (score < 90 && score >= 80) { result['B']++; }
      if (score < 80 && score >= 60) { result['C']++; }
      if (score < 60 && score >= 0) { result['D']++; }
      if (score == -1) { result['X']++; }
    }

    return result;
  }

  it("First triangle area", function() {
    assert.deepEqual(countGrade([50,60,70,80,90,100]) , {S:1, A:1, B:1, C:2, D:1, X:0});
    assert.deepEqual(countGrade([65,75,,85,85,95,100,100]) , {S:2, A:1, B:2, C:2, D:0, X:0});
    assert.deepEqual(countGrade([-1,-1,-1,-1,-1,-1]) , {S:0, A:0, B:0, C:0, D:0, X:6});

  });

});
