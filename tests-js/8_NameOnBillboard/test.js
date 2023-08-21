var assert = require('assert');

describe('Kyu 8: Name on billboard', function () {


  it(`Test Name on billboard`, () => {

    function billboard(name, price = 30){
      return name.split('').reduce((accum, e) => { return accum + price }, 0);
    }

    assert.equal(billboard("Jeong-Ho Aristotelis"), 600);
    assert.equal(billboard("Abishai Charalampos"), 570);
    assert.equal(billboard("Idwal Augustin"), 420);
    assert.equal(billboard("Hadufuns John",20), 260);
    assert.equal(billboard("Zoroaster Donnchadh"), 570);
    assert.equal(billboard("Claude Miljenko"), 450);
    assert.equal(billboard("Werner Vígi",15), 165);
    assert.equal(billboard("Anani Fridumar"), 420);
    assert.equal(billboard("Paolo Oli"), 270);
    assert.equal(billboard("Hjalmar Liupold",40), 600);
    assert.equal(billboard("Simon Eadwulf"), 390);
  });

});