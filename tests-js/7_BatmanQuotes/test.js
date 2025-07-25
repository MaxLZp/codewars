const {assert} = require("chai");

describe('Kyu 7: Batman Quotes', function () {

  let getQuote = function(quotes, hero){
    var heroes = {"R": "Robin", "B": "Batman", "J": "Joker"};
    var matches = hero.match(/^(\w).*(\d+)/);

    return `${heroes[matches[1]]}: ${quotes[matches[2]]}`;
  }

  it("Sample Tests", function() {
    let quotes = ["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"];
    assert.strictEqual(getQuote(quotes, "Rob1n"), "Robin: Holy haberdashery, Batman!");
    assert.strictEqual(getQuote(quotes, "Joke2"), "Joker: Let's put a smile on that faaaceee!");
    assert.strictEqual(getQuote(quotes, "Batm0n"), "Batman: WHERE IS SHE?!");
  });

});
