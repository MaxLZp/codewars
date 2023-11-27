var assert = require('assert');

describe('Kyu 7: ASCII letters from Number', function () {

  it("solution 1",function() {

    function convert(number){
      let result = '';
      for (let index = 0; index < number.length; index += 2) {
        result += String.fromCharCode(1*number.slice(index, index+2));
      }
      return result;
    }

    assert.strictEqual(convert("65"),"A");
    assert.strictEqual(convert("656667"),"ABC");
    assert.strictEqual(convert("676584"),"CAT");
    assert.strictEqual(convert("73327673756932858080698267658369"),"I LIKE UPPERCASE");
   })

  it("solution 2",function() {

    function convert(number){
      return String.fromCharCode(...number.match(/../g));
    }

    assert.strictEqual(convert("65"),"A");
    assert.strictEqual(convert("656667"),"ABC");
    assert.strictEqual(convert("676584"),"CAT");
    assert.strictEqual(convert("73327673756932858080698267658369"),"I LIKE UPPERCASE");
   })

});

