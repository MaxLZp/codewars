const chai   = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;


describe('Kyu 7: Format to the 2nd', function () {
  
  function nbrValidTickets(tickets){
    return tickets.filter(t => /^[a-z]\d[a-z]{4}$/i.test(t)).length;
   }
  
  it("Sample Tests", function() {
    var ex = ["A9JZOD","E9FIDH","SI2JIS","F8JIODJ","FDSNJA","A9POF?","AA9DIJD"]
    assert.equal(nbrValidTickets(ex),2);
  });

});
