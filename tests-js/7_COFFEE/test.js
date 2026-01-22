const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: COFFEE!', function () {

  function coffee(str) {
    return str.replaceAll(/coffee/gi, 'COFFEE');
  }

  it("The word 'coffee' should be in all-caps.", () => {
    msg = "The word 'coffee' should be in all-caps."
    
    yourAnswer = coffee("Is that coffee?  Can I have it?  I'll pay you.");
    wrongAnswer = "Is that coffee?  Can I have it?  I'll pay you.";
    assert.notStrictEqual(yourAnswer, wrongAnswer, msg);
    
    yourAnswer = coffee("I'm having trouble staying focussed.  Let's get some coffee.");
    answer = "I'm having trouble staying focussed.  Let's get some COFFEE.";
    assert.strictEqual(yourAnswer, answer, msg);
  })
  it("It should return a string.", () => {
    yourAnswer = typeof coffee("Sweet coffee.");
    wrongAnswer = 'number';
    msg = "It should return a string."
    assert.notStrictEqual(yourAnswer, wrongAnswer, msg);
  })
  it("It should have a length greater than zero.", () => {
    yourAnswer = (coffee("No cream in my coffee, thanks.").length);
    wrongAnswer = 0;
    msg = "It should have a length greater than zero.";
    assert.notStrictEqual(yourAnswer, wrongAnswer, msg);
  })

});
