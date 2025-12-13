const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Wheres Wally', function () {

  function wheresWally(string){
    return (" "+string).search(/ Wally\b/) 
  }

  it("test", () => {
    assert.equal(wheresWally(""),-1);
    assert.equal(wheresWally("DWally"),-1);
    assert.equal(wheresWally(".Wally"),-1);
    
    assert.equal(wheresWally("Wally"),0);
    assert.equal(wheresWally("Where's Wally"),8);
    assert.equal(wheresWally("Hi Wally."),3);
  });

});
