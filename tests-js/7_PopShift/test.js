const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Power of 4', function () {

  function popShift(s){
    var arr = s.split('');
    var result = ['', '', ''];
    while(arr.length >= 2) {
      result[0] += arr.pop();
      result[1] += arr.shift();
    }
    result[2] = arr.join('');

    return result;
  }

  it('Sample tests', () => {
    assert.deepEqual(popShift("reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps"), ["spahrepswonkohwebyamdlroweht","reusetestcasesbitcointakeove", "r"]);
    assert.deepEqual(popShift("turnsoutrandomtestcasesareeasierthanwritingoutbasicones"), ["senocisabtuognitirwnahtreis","turnsoutrandomtestcasesaree", "a"]);
    assert.deepEqual(popShift("exampletesthere"), ["erehtse","example","t"]);
    assert.deepEqual(popShift("aa"), ["a","a",""]);
    assert.deepEqual(popShift("b"), ["","",'b']);
    assert.deepEqual(popShift(""), ["","",""]);
  })

});
