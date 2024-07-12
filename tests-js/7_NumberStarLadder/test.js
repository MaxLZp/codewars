var assert = require('assert');

describe('Kyu 7: Number-Star ladder', function () {

  function pattern(n){
    var output = "1";
    for (let i = 2; i <= n; i++) {
      output += '\n1' + '*'.repeat(i - 1) + `${i}`;
    }

    return output;
   }

  it("tests", function () {
    assert.equal(pattern(3),"1\n1*2\n1**3");
    assert.equal(pattern(7),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7");
    assert.equal(pattern(20),"1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7\n1*******8\n1********9\n1*********10\n1**********11\n1***********12\n1************13\n1*************14\n1**************15\n1***************16\n1****************17\n1*****************18\n1******************19\n1*******************20");
  });

});
