const assert = require('assert');

describe('Kyu 7: Tram Capacity', function () {

  it("Tests", function() {

    function tram(stops, descending, onboarding){
      var capacity = 0;
      var maxCapacity = capacity;

      for (let i = 0; i < stops; i++) {
        capacity += onboarding[i] - descending[i];
        if (capacity > maxCapacity) {
          maxCapacity = capacity;
        }
      }

      return maxCapacity;
    }

    assert.equal(tram(4, [0, 2, 4, 4], [3, 5, 2, 0]), 6);
    assert.equal(tram(2, [0, 2, 4, 4], [3, 5, 2, 0]), 6);
    assert.equal(tram(1, [0, 2, 4, 4], [3, 5, 2, 0]), 3);
    assert.equal(tram(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 25);
    assert.equal(tram(5, [0, 2, 4, 14, 2], [3, 5, 14, 0, 0]), 16);

    assert.equal(tram(29,  [0, 13, 2, 14, 20, 12, 25, 1, 26, 8, 4, 3, 5, 0, 12, 7, 4, 13, 1, 1, 16, 3, 9, 8, 32, 4, 5, 19, 17, 1, 2, 30, 9, 0, 13, 8, 8, 14, 4] ,  [18, 19, 20, 18, 1, 4, 10, 10, 17, 7, 3, 6, 2, 2, 8, 10, 3, 20, 2, 20, 10, 15, 8, 2, 11, 5, 18, 3, 13, 13, 7, 20, 2, 13, 8, 7, 4, 14, 0]), 46);

  });

});
