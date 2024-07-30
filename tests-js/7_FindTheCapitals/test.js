var assert = require('assert');

describe("Find the Capitals", function() {

  function capital(capitals){
    return capitals.map((obj) => (`The capital of ${obj['state'] || obj['country']} is ${obj['capital']}`));
  }

  it("tests", function(){
    state_capitals = [{state: 'Maine', capital: 'Augusta'}]
    assert.equal(capital(state_capitals)[0], "The capital of Maine is Augusta");

    country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
    assert.equal(capital(country_capitals)[0], "The capital of Spain is Madrid")

    mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
    assert.equal(capital(mixed_capitals)[1], "The capital of Spain is Madrid")
  });

});
