const {assert} = require('chai');

describe('Kyu 7: Complete The Pattern #5 - Even Ladder', function () {

  function pattern(n){
    let output="";
    for (let num = 2; num <= n; num += 2) {
      output += `${num}`.repeat(num) + "\n";
    }

    return output.trimEnd();
  }

  it("sample tests", () => {
    assert.strictEqual(pattern(2),"22");
    assert.strictEqual(pattern(1),"");
    assert.strictEqual(pattern(5),"22\n4444");
    assert.strictEqual(pattern(0),"");
    assert.strictEqual(pattern(-25),"");
  });

});
