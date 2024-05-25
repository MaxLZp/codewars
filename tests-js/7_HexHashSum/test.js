var assert = require('assert');

describe('Kyu 7: Hex Hash Sum', function () {


  function hexHash(code){
    return [...code]
      .map((c) => ( c.charCodeAt(0).toString(16).match(/\d/gi).reduce((c, v) => ( c + +v ), 0) ))
      .reduce((c, v) => ( c + v ), 0);
  }


  it("Yo", function(){
    assert.equal(hexHash('Yo'), 20);
  });
  it("Hello, World!", function(){
    assert.equal(hexHash('Hello, World!'), 91);
  });
  it("Forty4Three", function(){
    assert.equal(hexHash('Forty4Three'), 113);
  });


});
