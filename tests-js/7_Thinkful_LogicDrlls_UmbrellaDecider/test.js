var assert = require('assert');

describe('Kyu 7: Thinkful - Logic Drills: Umbrella decider', function () {

  function takeUmbrella(weather, chance) {

    return weather == 'rainy'
      || chance >= 0.5
      || (weather == 'cloudy' &&  chance > 0.20);
  }

  it('Sample tests', () => {
    assert.equal(takeUmbrella('sunny', 0.4), false);
    assert.equal(takeUmbrella('rainy', 0), true);
    assert.equal(takeUmbrella('cloudy', 0.2), false);

    assert.equal(takeUmbrella('cloudy', 0.4), true);
  })

});
