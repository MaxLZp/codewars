var assert = require('assert');

describe('Kyu 7: Insert Dashes 2. Solution2', function () {

  function insertDashII(num) {
    return `${num}`
      .replace(/([2468])(?=[2468])/g, '$1*')
      .replace(/([13579])(?=[13579])/g, '$1-');
 }

  it("Fixed Tests", () => {
    assert.equal(insertDashII(454793), '4547-9-3');
    assert.equal(insertDashII(123456), '123456');
    assert.equal(insertDashII(40546793), '4054*67-9-3');
    assert.equal(insertDashII(1012356895), '10123-56*89-5');
  });

});
