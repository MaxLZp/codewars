const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: A twisted way to select an element from an array.', function () {

  it("solution 1",function() {

    function select (arrSearch, arrTake){
      var c = arrSearch.sort((l, r) => r.localeCompare(l))[2][2];

      return arrTake.find(s => s[0] == c) || 'Nothing here';
    }

    assert.strictEqual(select(['banana','rose','orange','apple'], ['carrot','nectarines','cucumber','ananas']),'nectarines')
    assert.strictEqual(select(['attack','defense','fight','retreat'], ['fist','punch','break']),'fist');

  })

});

