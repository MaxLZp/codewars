const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: 99 Bottles of Beer', function () {

  var sing = function () {
    var result = [];
    for(var i = 99; i > 0;) {
      var b = i == 1 ? `bottle` : 'bottles'
      result.push(`${i} ${b} of beer on the wall, ${i} ${b} of beer.`);
      i--;
      var l = i > 1 ? `${i} bottles` : ( i == 1 ? `${i} bottle` : 'no more bottles');
      result.push(`Take one down and pass it around, ${l} of beer on the wall.`);
    }
    result.push(`No more bottles of beer on the wall, no more bottles of beer.`);
    result.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`);

    return result;
  };

  it("Test", function() {
    let song = sing();
    assert.equal(song[0], '99 bottles of beer on the wall, 99 bottles of beer.');
    assert.equal(song[199], 'Go to the store and buy some more, 99 bottles of beer on the wall.');
    
    assert.equal(song[1], 'Take one down and pass it around, 98 bottles of beer on the wall.');
  });

});