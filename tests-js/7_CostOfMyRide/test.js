var assert = require('assert');

describe('Kyu 7: Cost of my ride', function () {

  function insurance(age, size, numofdays){
    if (numofdays <= 0) {
      return 0;
    }
    var cost = 50;
    if (age < 25) {
      cost += 10;
    }
    switch (size) {
      case 'economy': break;
      case 'medium': cost += 10; break;
      default: cost += 15; break;
    }

    return cost * numofdays;
  }


  it("Should pass sample tests", () => {
    assert.equal(insurance(18, "medium", 7), 490);
    assert.equal(insurance(30,"full-size",30),1950);

    assert.equal(insurance(21,"economy",-10), 0);
    assert.equal(insurance(42,"my custom car",7), 455);
  });

});
