var assert = require('assert');

describe('Kyu 7: Rock Off!', function () {

  function solve(a, b) {

    var score = {
      a: 0,
      b: 0,
      string : function() { return `${this.a}, ${this.b}`}
    };
    for (let index = 0; index < a.length; index++) {
      if (a[index] > b[index]) { score.a++; }
      if (a[index] < b[index]) { score.b++; }
    }
    if(score.a > score.b) { return `${score.string()}: Alice made "Kurt" proud!`}
    if(score.a < score.b) { return `${score.string()}: Bob made "Jeff" proud!`}
    return `${score.string()}: that looks like a "draw"! Rock on!`;

  }

  it("It should works for basic tests.", function(){
    assert.equal(solve([47, 7, 2], [47, 7, 2]),'0, 0: that looks like a "draw"! Rock on!')
    assert.equal(solve([47, 67, 22], [26, 47, 12]),'3, 0: Alice made "Kurt" proud!')
    assert.equal(solve([25, 50, 22], [34, 49, 50]),'1, 2: Bob made "Jeff" proud!')
  })

});
