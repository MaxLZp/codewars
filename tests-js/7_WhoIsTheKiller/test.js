const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;


describe('Kyu 7: Who is the killer?', function () {

  function killer(suspectInfo, dead) {
    return Object.keys(suspectInfo).reduce((carry, suspect) => {
      return (suspectInfo[suspect].filter(s => dead.includes(s)).length == dead.length) ? suspect : carry;
    }, '');
  }

  it("The killer is James!", function() {
    assert.deepEqual(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']), 'James');
  });

  it("The killer is Megan!", function() {
    assert.deepEqual(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']), 'Megan');
  });

});
