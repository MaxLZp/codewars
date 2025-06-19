var assert = require('assert');

describe('Kyu 7: Rock Paper Scissors Oracle', function () {

  function oracle(gestures){
    var count = gestures.reduce((c, e) => {
      c[e][1]++;
      if (e == 'rock') { c['paper'][0]++; }
      if (e == 'paper') { c['scissors'][0]++; }
      if (e == 'scissors') { c['rock'][0]++; }
      return c;
    }, 
    {
      "rock": [0, 0],
      "paper": [0, 0],
      "scissors": [0, 0]
    });

    var result = [];
    for (const gesture in count) {
      if (count[gesture][0] > gestures.length - count[gesture][0] - count[gesture][1]) { result.push(gesture); }
    }

    return result.length == 0 ? "tie" : result.join('/');
  }

  it("It should works for basic tests.", function(){
    assert.equal(oracle(["rock","paper","scissors","rock"]), "paper");
    assert.equal(oracle(["rock","paper","scissors"]), "tie");
    assert.equal(oracle(["rock","paper","paper","scissors","scissors"]), "scissors");
    assert.equal(oracle(["paper","scissors","scissors"]), "rock/scissors");
  })

});
