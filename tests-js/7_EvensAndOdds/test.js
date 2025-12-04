const {assert} = require("chai");

describe('Kyu 7: Evens and Odds', function () {

  function evensAndOdds(num){
    return num % 2 == 1 ? num.toString(16) : num.toString(2);
  }

  it("Tests", function() {

    function doTest (number, expected) {
      const actual = evensAndOdds(number);
      assert.equal(actual, expected, `for n = ${number}:\n`);
    }

    doTest(2,'10');
		doTest(13,'d');
		doTest(47,'2f');
		doTest(0,'0');
		doTest(12800,'11001000000000');
		doTest(8172381723,'1e71ca61b');

  });

});
