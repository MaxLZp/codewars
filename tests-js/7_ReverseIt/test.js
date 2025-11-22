const { assert } = require('chai');

describe('Kyu 7: reverseIt', function () {

  function reverseIt(data){
    var result = data;
    switch(typeof data) {
      case 'string': result = `${data}`.split('').reverse().join(''); break;
      case 'number': result = +`${data}`.split('').reverse().join(''); break;
    }

    return result;
  }

  it("Sample tests", function() {
    assert.deepEqual(reverseIt('Hello'), "olleH")
    assert.deepEqual(reverseIt(314159), 951413)
    assert.deepEqual(reverseIt("314159"), "951413")
    assert.deepEqual(reverseIt([]), [])
  });

});
