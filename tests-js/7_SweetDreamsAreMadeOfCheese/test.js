var assert = require('assert');

describe('Kyu 7: Sweet Dreams are Made of Cheese', function () {
  it("test", () => {

    function payCheese(arr) {
      // Gouda luck!
      var hrs = arr.reduce(function(carry, current) {
          return carry + current / (60*10/6);
        }, 0);

      return '£' + 8.75 * 4 * Math.ceil(hrs);
    }

    // Two standard weeks
    assert.equal(payCheese([750,750,750,750,600]),"£1260");
    assert.equal(payCheese([700,750,700,750,600]),"£1225");
    // Don't forget to round up at the end of the week
    assert.equal(payCheese([574,574,574,574,574]),"£1015");
  });
});
