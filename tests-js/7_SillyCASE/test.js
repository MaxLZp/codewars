const assert = require('chai').assert;

describe('Kyu 7: SillyCASE', function () {

  function sillycase(silly) {
    var delimiter = Math.ceil(silly.length / 2);

    return silly.slice(0, delimiter).toLowerCase() + silly.slice(delimiter).toUpperCase();
  }

  it("should return correct sillycase for sample inputs", function() {
    assert.strictEqual(sillycase('foobar'), "fooBAR");
    assert.strictEqual(sillycase('codewars'), "codeWARS");
    assert.strictEqual(sillycase('brian'), 'briAN');
  });

  // it("should be idempotent", function(){
  //   var i, t, r;
  //   for(i = 0; i < 100; ++i){
  //     t = Test.randomToken().replace(/\d/g,'');
  //     r = sillycase(t);
  //     assert.strictEqual(sillycase(r), r);
  //   }
  // });

});
