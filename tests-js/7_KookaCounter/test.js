var assert = require('assert');

describe('Kyu 7: Kooka-Counter', function () {

  it("Solution 1 Tests", () => {

    var kookaCounter = function(laughing) {
      return (laughing.match(/(Ha)+|(ha)+/g) || []).length;
    }

    assert.equal(kookaCounter(""), 0);
    assert.equal(kookaCounter("hahahahaha"), 1);
    assert.equal(kookaCounter("hahahahahaHaHaHa"), 2);
    assert.equal(kookaCounter("HaHaHahahaHaHa"), 3);

  });


});
