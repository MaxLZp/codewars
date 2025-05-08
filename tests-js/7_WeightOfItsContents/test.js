var assert = require('assert');

describe('Kyu 7: Weight of its Contents', function () {
  it('solution1', function () {

    /*
    * Takes a bottleWeight and scale of the bottle to its contents
    * and returns the weight of its contents
    * @param {int} bottleWeight:
    *  The weight of the entire bottle and contents
    * @param {string} scale:
    *  A string comparing the weight of the bottle contents to the weight of the bottle by itself
    * Acceptable values: ('2 times larger', '4 times larger', '50 times smaller')
    */
    function contentWeight(bottleWeight, scale) {
      var m = scale.match(/(\d+).*(smaller|larger)/);

      return m[2] == 'larger' ? Math.round(bottleWeight / (1 + 1/m[1])) : Math.round(bottleWeight / (1 + 1*m[1]));
    }

    assert.equal(contentWeight(120, "2 times larger"), 80);
    assert.equal(contentWeight(120, "2 times smaller"), 40);

  });

});
