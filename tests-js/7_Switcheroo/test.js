var assert = require('assert');

describe('Kyu 7: Switcheroo', function () {
  
  function switcheroo(x){
    var r = '';
    for(var i = 0; i < x.length; i++) {
      switch (x[i]) {
        case 'a': r += 'b'; break;
        case 'b': r += 'a'; break;
        default: r += x[i]; break;
      }
    }

    return r;

    // return x.replace(/[ab]/g,x => x == "a" ? "b" : "a")
  }

  it("test", () => {
    assert.strictEqual(switcheroo('abc'), 'bac');
    assert.strictEqual(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
    assert.strictEqual(switcheroo('ccccc'), 'ccccc');    
  });

});
