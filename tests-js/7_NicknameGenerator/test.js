const {assert} = require("chai");

describe('Kyu 7: Nickname Generator', function () {

  it("Test", () => {

    function nicknameGenerator(name){
      if (name.length < 4) { return "Error: Name too short"; }

      return /[aeiou]/.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
    }

    assert.equal(nicknameGenerator("Jimmy"), "Jim");
    assert.equal(nicknameGenerator("Samantha"), "Sam");
    assert.equal(nicknameGenerator("Sam"), "Error: Name too short");
    assert.equal(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
    assert.equal(nicknameGenerator("Melissa"), "Mel");
    assert.equal(nicknameGenerator("James"), "Jam");

  });

});
