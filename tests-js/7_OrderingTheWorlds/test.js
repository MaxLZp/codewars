const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Ordering the words!', function () {

  function orderWord(s){
    return s ? [...s].sort().join('') : "Invalid String!";
  }

  it("Tests", () => {
    assert.strictEqual(orderWord("Hello, World!"), " !,HWdellloor");
    assert.strictEqual(orderWord("bobby"), "bbboy");
    assert.strictEqual(orderWord("b"), "b");
    assert.strictEqual(orderWord(""), "Invalid String!");
    assert.strictEqual(orderWord("completesolution"), "ceeillmnooopsttu");
    assert.strictEqual(orderWord("\"][@!$*(^&%"), "!\"$%&(*@[]^");
    assert.strictEqual(orderWord("i\"d][@z!$r(^a&world%"),"!\"$%&(@[]^addilorrwz");
    assert.strictEqual(orderWord(null),"Invalid String!");
    assert.strictEqual(orderWord("cba"),"abc");
    assert.strictEqual(orderWord("abc"),"abc");
  })

});
