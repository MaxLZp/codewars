const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Most valuable character', function () {

  function solve(st) {
    var char = st[0];
    var value = st.lastIndexOf(st[0]) - st.indexOf(st[0]);
    st = st.replaceAll(st[0], ' ');

    for(var i = 1; i < st.length; i++) {
      if (st[i] == ' ') { continue; }
      var nv = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
      if (nv > value || (nv == value && char.charCodeAt(0) > st[i].charCodeAt(0))) {
        char = st[i];
        value = nv;
      }
      st = st.replaceAll(st[i], ' ');
    }

    return char;
  }

  it("Solution 1. Node 18.13.3", function() {
    assert.strictEqual(solve('a'), 'a');
    assert.strictEqual(solve('aa'), 'a');
    assert.strictEqual(solve('bcd'), 'b');
    assert.strictEqual(solve('axyzxyz'), 'x');
    assert.strictEqual(solve('aabccc'), 'c'); 
 
  });

});
