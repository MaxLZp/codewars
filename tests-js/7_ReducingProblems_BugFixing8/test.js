const { assert } = require('chai');

describe('Reducing Problems - Bug Fixing #8', () => {

  function calculateTotal(team1, team2) {
    let t1s = team1.reduce((t, c) => t + c, 0);
    let t2s = team2.reduce((t, c, i) => t + c, 0);
    return t1s > t2s;
  }

  it('basic tests', () => {
    assert.strictEqual(calculateTotal([1,2,2],[1,0,0]), true, 'Calculate the Winner!');
    assert.strictEqual(calculateTotal([6,45,1],[1,55,0]), false, 'Calculate the Winner!');
    assert.strictEqual(calculateTotal([57,2,1],[]), true, 'Calculate the Winner!');
    assert.strictEqual(calculateTotal([],[3,4,3]), false, 'Calculate the Winner!');
  });
});
