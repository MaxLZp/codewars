var assert = require('assert');

describe('Kyu 7: Simple Sequence Validator', function () {

  function validateSequence(x) {
    return x.every((e, i, a) => i > 1 ? a[i] - a[i-1] == a[i-1] - a[i-2] : true);
  }

  it("Should work for vaild sequences", () => {
    assert.strictEqual(validateSequence([1,2,3,4,5,6,7,8,9]), true, "Sequence is valid")
    assert.strictEqual(validateSequence([0,1,2,3,4,5,6,7,8]), true, "Sequence is valid")
    assert.strictEqual(validateSequence([1,3,5,7,9,11,13,15]), true, "Sequence is valid")
  });
  it("Should work for invalid sequences", () => {
    assert.strictEqual(validateSequence([1,3,5,7,8,12,14,16]), false, "Sequence is invalid")
    assert.strictEqual(validateSequence([1,2,3,4,5,8,7,8,9]), false, "Sequence is invalid")
    assert.strictEqual(validateSequence([2,8,6,7,4,3,1,5,9]), false, "Sequence is invalid")
  })

});
