const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Character Concatenation', function () {

  function charConcat(string){
    let result = '';
    for (let i = 0, max = Math.floor(string.length / 2); i < max; i++) {
      result += string[i] + string[string.length - 1 - i] + `${i + 1}`;
    }

    return result;
  }

  it('solution1', function () {

    assert.strictEqual(charConcat("abc def"),'af1be2cd3',"Should work for example test");
    assert.strictEqual(charConcat("CodeWars"),'Cs1or2da3eW4',"Should work for 'CodeWars'");

  });

});
