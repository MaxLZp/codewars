var assert = require('assert');

describe('Kyu 7: Deodorant Evaporator', function () {

  function evaporator(content, evap_per_day, threshold){
    let rest = 100;
    let days = 0;
    while (rest > threshold) {
      rest *= (100 - evap_per_day) / 100;
      days++;
    }
    return days;
  }

  it("Fixed Tests", () => {
    assert.equal(evaporator(10,10,10),22);
  });

});
