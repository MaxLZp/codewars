const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Make acronym', function () {

  it("Sample Tests", function() {

    function toAcronym(inp){
      return inp.split(/\s/).map((e) => (e[0].toUpperCase())).join('');
    }

    let tests = [
      ["Code Wars", "CW"],
      ["Water Closet", "WC"],
      ["Portable Network Graphics", "PNG"],
      ["PHP: Hypertext Preprocessor", "PHP"],
      ["hyper text markup language", "HTML"]
    ];
    tests.forEach( ([inp,exp]) => assert.strictEqual( toAcronym(inp), exp ) );
  });

});
