var assert = require('assert');

describe('Kyu 7: Pluck data from Wikipedia lists', function () {

  function pluck(data, property) {
    return data.map(e => e[property]);
  }

  // from https://en.wikipedia.org/wiki/List_of_countries_by_GDP_%28nominal%29_per_capita
  var gdpPerCapita = [{
    "name": "Luxembourg",
    "dollars": 111716
  }, {
    "name": "Norway",
    "dollars": 97013
  }, {
    "name": "Qatar",
    "dollars": 93965
  }];
  var empty = [];

  it("should pull data", function() {
    assert.deepEqual(
      pluck(gdpPerCapita, 'name'),
      ["Luxembourg","Norway","Qatar"],
      'basic test',
    );
    assert.deepEqual(
      pluck(gdpPerCapita, 'dollars'),
      [111716,97013,93965],
      'basic test',
    );
  });

  it("should return empty array for empty sets", function() {
    assert.deepEqual(
      pluck(empty, 'foo'),
      [],
      'empty test',
    );
  });

});
