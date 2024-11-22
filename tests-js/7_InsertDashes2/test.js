var assert = require('assert');

describe('Kyu 7: Insert Dashes 2', function () {

  function insertDashII(num) {
    let str = `${num}`;
    let result = '';
    for (var i = 0; i < str.length - 1; i++) {
      result += str[i];
      if (str[i] == 0 || str[i+1] == 0) {
        continue;
      }
      if (str[i] % 2 == 0 && str[i+1] %2 == 0) {
        result += '*';
      }
      if (str[i] %2 != 0 && str[i+1] % 2 != 0) {
        result += '-';
      }
    }
    result += str[i];

    return result;
 }

  it("Fixed Tests", () => {
    assert.equal(insertDashII(454793), '4547-9-3');
    assert.equal(insertDashII(123456), '123456');
    assert.equal(insertDashII(40546793), '4054*67-9-3');
    assert.equal(insertDashII(1012356895), '10123-56*89-5');
  });

});
