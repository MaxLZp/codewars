var {assert} = require('chai');

describe('Kyu 7: Split In Parts', function () {

  it('solution1', function () {

    var splitInParts = function(s, partLength){
      if (s.length <= partLength) { return s; }
      return s.slice(0, partLength) + ' ' + splitInParts(s.substring(partLength), partLength);
    }

    assert.equal(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
    assert.equal(splitInParts("HelloKata", 1), "H e l l o K a t a")
    assert.equal(splitInParts("HelloKata", 9), "HelloKata")

  });

  it('solution2', function () {

    var splitInParts = function(s, partLength){
      return s.match(new RegExp(`.{1,${partLength}}`, 'g')).join(' ');
    }

    assert.equal(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
    assert.equal(splitInParts("HelloKata", 1), "H e l l o K a t a")
    assert.equal(splitInParts("HelloKata", 9), "HelloKata")

  });

});
