var assert = require('assert');

describe('Kyu 7: Find your caterer', function () {

  function findCaterer(budget, people){
    if (people <= 0) { return -1; }
    
    var caterers = [
      (budget, people) => budget - people * 15,
      (budget, people) => budget - people * 20,
      (budget, people) => budget - people * (people > 60 ? 30 * 0.8 : 30),
    ];

    var result = -1;
    var min = Number.MAX_VALUE;
    for(var i = 0; i < caterers.length; i++) {
      var res = caterers[i](budget, people);
      if (res >= 0) { result = i + 1; min = res; }
    }

    return result;
  }

  it("budget = 150, people = 10, expected = 1", () => {
    assert.strictEqual(findCaterer(150, 10), 1);
  });
  
  it("budget = 1500, people = 60, expected = 2", () => {
    assert.strictEqual(findCaterer(1500, 60), 2);
  });
  
  it("budget = 1500, people = 61, expected = 3", () => {
    assert.strictEqual(findCaterer(1500, 61), 3);
  });
  
  it("budget = 100, people = 0, expected = -1", () => {
    assert.strictEqual(findCaterer(100, 0), -1);
  });
  
  it("budget = 200, people = 5, expected = 3", () => {
    assert.strictEqual(findCaterer(200, 5), 3);
  });
  
  it("budget = 1000, people = 45, expected = 2", () => {
    assert.strictEqual(findCaterer(1000, 45), 2);
  });
  
  it("budget = 940, people = 70, expected = -1", () => {
    assert.strictEqual(findCaterer(940, 70), -1);
  });

});
