const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Why So Serious?', function () {

  it('solution1', function () {

    function whySoSerious(str) {
      return ['Jc', '7s', '5s', 'As', '9c'].every((c) => (str.includes(c)));
    }

    assert.strictEqual(whySoSerious("3s10s3c10c5s2s5cJsAs9c4s8cAc8s6c6s9s4c"), false);
    assert.strictEqual(whySoSerious("4s8cJcJs6c6s9s7s9c4c5sAs2s"), true);
    assert.strictEqual(whySoSerious("10cJs8s6c6s"), false);
    assert.strictEqual(whySoSerious("9c8cAc3s3cAsJs9sJc4c5s2s7s"), true);
    assert.strictEqual(whySoSerious("Jc8cAc3s3cAsJs9sJc4c5s2s7s"), false);

  });

  it('solution2', function () {

    function whySoSerious(str) {
      return /(?=.*Jc)(?=.*7s)(?=.*5s)(?=.*As)(?=.*9c)/.test(str);;
    }

    assert.strictEqual(whySoSerious("3s10s3c10c5s2s5cJsAs9c4s8cAc8s6c6s9s4c"), false);
    assert.strictEqual(whySoSerious("4s8cJcJs6c6s9s7s9c4c5sAs2s"), true);
    assert.strictEqual(whySoSerious("10cJs8s6c6s"), false);
    assert.strictEqual(whySoSerious("9c8cAc3s3cAsJs9sJc4c5s2s7s"), true);
    assert.strictEqual(whySoSerious("Jc8cAc3s3cAsJs9sJc4c5s2s7s"), false);

  });

});
