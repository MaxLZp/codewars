const chai = require("chai");
const assert = chai.assert;

describe("The Robber Language",() => {

  function robberEncode(sentence) {
    return sentence.split('').map(c => {
      if (/[BCDFGHJKLMNPQRSTVWXYZ]/.test(c)) {
        return `${c}O${c}`
      } else if (/[BCDFGHJKLMNPQRSTVWXYZ]/i.test(c)) {
        return `${c}o${c}`
      }
      return c;
    }).join('');

    // // Other
    // return   sentence
    // .replace(/[bcdfghjklmnpqrstvwxyz]/g, '$&o$&')
    // .replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, '$&O$&');

    // // Other2
    // return sentence.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/gi,x => x==x.toLowerCase()?x+'o'+x:x+'O'+x);
  }

  it("Sample Tests", function() {
    assert.strictEqual(robberEncode("hello world"), "hohelollolo wowororloldod");
    assert.strictEqual(robberEncode("coding is fun"), "cocododinongog isos fofunon");
    assert.strictEqual(robberEncode("follow the white rabbit"), "fofolollolowow tothohe wowhohitote rorabobbobitot");
    assert.strictEqual(robberEncode("S.O.S"), "SOS.O.SOS");
  });
});
