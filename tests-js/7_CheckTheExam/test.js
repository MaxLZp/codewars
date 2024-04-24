const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Check the exam', function () {

  it('solution1', function () {
    function checkExam(array1, array2) {
      var sum = array2.reduce((a, v, i) => (
        a + (v ? (v == array1[i] ? 4 : -1) : 0)
      ), 0);
      return sum < 0 ? 0 : sum;
     }

    assert.strictEqual(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
    assert.strictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
    assert.strictEqual(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
    assert.strictEqual(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);
  });

});
