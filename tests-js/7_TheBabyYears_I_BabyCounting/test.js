const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("The Baby Years I - Baby Counting",() =>{

  function babyCount(x) {
    var count = {};
    var xx = x.toLowerCase();
    for (let index = 0; index < xx.length; index++) {
      count[xx[index]] = count[xx[index]] ? count[xx[index]] + 1 : 1;
    }
    var min = Math.min(Math.floor(count.b / 2), count.a, count.y);
    return (min < 1 || isNaN(min)) ? 'Where\'s the baby?!' : min;
  }

  it("Should pass Example tests",() =>{
    assert.strictEqual(babyCount('baby'), 1);
    assert.strictEqual(babyCount('abby'), 1);
    assert.strictEqual(babyCount('baby baby baby'), 3);
    assert.strictEqual(babyCount('Why the hell are there so many babies?!'), 1);
    assert.strictEqual(babyCount('Anyone remember life before babies?'), 1);
    assert.strictEqual(babyCount('Happy babies boom ba by?'), 2);
    assert.strictEqual(babyCount('b a b y'), 1);
    assert.strictEqual(babyCount(''), 'Where\'s the baby?!');
    assert.strictEqual(babyCount('none here'), 'Where\'s the baby?!');

    assert.strictEqual(babyCount('ySyybBbAaaahogikjaaxorbAhbb JmedmapAGyYybhecboBabJfbblb yaepbkaBrztyacifvYpybJbylBs bAcxqxbYfbxvJawaSgbbtwbJvbq'), 12);
  })

})
