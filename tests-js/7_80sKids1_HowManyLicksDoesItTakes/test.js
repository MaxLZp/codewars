const assert = require('chai').assert;

describe('Kyu 7: 80s Kids 1: How Many Licks Does it Take?', function () {

  function totalLicks(env) {
    var licks = 252;
    var toughestStr = '';
    var toughestVal = 0;

    Object.getOwnPropertyNames(env).forEach(prop => {
      if (env[prop] > toughestVal) {
        toughestVal = env[prop];
        toughestStr = prop;
      }
      licks += env[prop];
    });

    return `It took ${licks} licks to get to the tootsie roll center of a tootsie pop.${toughestVal > 0 ? ' The toughest challenge was '+toughestStr+'.' : ''}`
  }

  it("test", () => {

    assert.equal(totalLicks({ "freezing temps": 10, "clear skies": -2 }),
      "It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps.");
    assert.equal(totalLicks({ "happiness": -5, "clear skies": -2 }),
      "It took 245 licks to get to the tootsie roll center of a tootsie pop.");
    assert.equal(totalLicks({}),
      "It took 252 licks to get to the tootsie roll center of a tootsie pop.");
    assert.equal(totalLicks({"dragons": 100, "evil wizards": 110, "trolls": 50}),
      "It took 512 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was evil wizards.");
    assert.equal(totalLicks({"white magic": -250}),
      "It took 2 licks to get to the tootsie roll center of a tootsie pop.");
      
  });

});
