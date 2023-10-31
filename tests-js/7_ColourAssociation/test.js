var assert = require('assert');

describe('Kyu 7: Colour Association', function () {

  function colourAssociation(array){
    return array.map((assoc) => { return {[assoc[0]]: assoc[1]}; });
  }


  it("Should pass sample tests", () => {
    assert.deepEqual(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [{white:"goodness"},{blue:"tranquility"}]);
    assert.deepEqual(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]), [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);
  });

});
