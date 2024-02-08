var assert = require('assert');

describe('Kyu 7: Offload your work!', function () {

  function workNeeded(projectMinutes, freelancers)
  {
    var myMinutes = freelancers.reduce((carry, current) => {
      return carry - 60*current[0] - current[1];
    }, projectMinutes);

    if (myMinutes <= 0) { return 'Easy Money!'; }
    return `I need to work ${Math.floor(myMinutes / 60)} hour(s) and ${myMinutes % 60} minute(s)`;
  }

  it('Tests', () => {
    assert.equal(workNeeded(60, [[1,0]]), "Easy Money!");
    assert.equal(workNeeded(60, [[0,0]]), "I need to work 1 hour(s) and 0 minute(s)");
    assert.equal(workNeeded(141, [[1,55], [0,25]]), "I need to work 0 hour(s) and 1 minute(s)");
  });

});
