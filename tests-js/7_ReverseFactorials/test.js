var assert = require('assert');

describe('Kyu 7: Reverse Factorials', function () {

  function reverseFactorial(num) {
    for (let i = 1; i <= num; i++) {
      if (num == i) {return `${i}!`;}
      num /= i;
    }
    return 'None';
  }

  it("Sample tests", function() {
    assert.equal(reverseFactorial(120), '5!');
    assert.equal(reverseFactorial(3628800), '10!');
    assert.equal(reverseFactorial(150), 'None');
  });

});

describe('Kyu 7: Reverse Factorials. Solution2', function () {

  function reverseFactorial(num) {
    var f = 1;
    while(num > 1) num /= ++f;
    return num == 1 ? `${f}!` : 'None';
  }

  it("Sample tests", function() {
    assert.equal(reverseFactorial(120), '5!');
    assert.equal(reverseFactorial(3628800), '10!');
    assert.equal(reverseFactorial(150), 'None');
  });

});
