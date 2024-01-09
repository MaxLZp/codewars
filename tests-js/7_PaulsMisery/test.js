var assert = require('assert');

describe('Kyu 7: Paul\'s Misery', function () {

  function paul(x){
    var sum = x.reduce((prev, cur) => {
      switch (cur) {
        case 'kata': return prev + 5;
        case 'Petes kata': return prev + 10;
        case 'life': return prev + 0;
        case 'eating': return prev + 1;
        default: return 0;
      }
    }, 0);
    switch (true) {
      case (sum < 40) : return 'Super happy!';
      case (sum < 70 && sum >= 40) : return 'Happy!';
      case (sum < 100  && sum >= 70) : return 'Sad!';
      default: return 'Miserable!';
    }
  }

  it("Testing for fixed tests", () => {
    assert.strictEqual(paul(['life', 'eating', 'life']), 'Super happy!');
    assert.strictEqual(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
    assert.strictEqual(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');
  });

});

