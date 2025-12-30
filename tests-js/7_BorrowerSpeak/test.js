const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Borrower Speak', function () {

  function borrow(s){
    return s.toLowerCase().replaceAll(/[\W]/g, '');
  }

  it("Tests", function() {
    assert.strictEqual(borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake');
    assert.strictEqual(borrow('THE big PeOpLE Here!!'), 'thebigpeoplehere'); 
    assert.strictEqual(borrow('i AM a TINY BoY!!'), 'iamatinyboy'); 
  });

});
