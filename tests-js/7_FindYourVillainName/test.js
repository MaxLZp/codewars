var assert = require('assert');

describe('Kyu 7: Find Your Villain Name', function () {

  function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    return `The ${m[birthday.getMonth()]} ${d[birthday.getDate() % 10]}`
  }

  it("May 3", () => {
    assert.strictEqual(getVillainName(new Date("May 3")), "The Despicable Raisin");
  });
  
  it("April 21", () => {
    assert.strictEqual(getVillainName(new Date("April 21")), "The Trashy Pickle");
  });
  
  it("December 17", () => {
    assert.strictEqual(getVillainName(new Date("December 17")), "The Awkward House Cat");
  });

});
