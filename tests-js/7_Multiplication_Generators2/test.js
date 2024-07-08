const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Multiplication - Generators #2', function () {

  function* generator(a) {
    for(var i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
      yield `${a} x ${i} = ${a * i}`
    }
  }

  it("Basic Test Cases", function() {
    let gen = generator(1);
    assert.strictEqual(gen.next().value, '1 x 1 = 1', '1 x 1 = 1');
    assert.strictEqual(gen.next().value, '1 x 2 = 2', '1 x 2 = 2');
    assert.strictEqual(gen.next().value, '1 x 3 = 3', '1 x 3 = 3');
    assert.strictEqual(gen.next().value, '1 x 4 = 4', '1 x 4 = 4');
    assert.strictEqual(gen.next().value, '1 x 5 = 5', '1 x 5 = 5');
  });

});
