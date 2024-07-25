
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Remove B M W', function () {

  function removeBMW(str){
    if (typeof str !== 'string') {
      throw new Error("This program only works for text.");
    }

    return str.replace(/[BMW]/gi, '');
  }

  it ("Test for a string that contains only letters b, m and w", function(){
    [
      ["bmwvolvoBMW","volvo"],
      ["blablahblah","lalahlah"],
    ].forEach(([inp,exp])=>{
      assert.strictEqual(removeBMW(inp), exp, "It should return an empty string.");
    });
  });

});
