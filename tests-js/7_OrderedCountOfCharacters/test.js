const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Ordered Count of Characters', function () {

  const examples = [
    ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
    ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
    ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],
  ];

  const orderedCount = function (text) {
    var obj = new Map();
    for (let index = 0; index < text.length; index++) {
      if (! obj.has(text[index])) {
        obj.set(text[index], 0);
      }
      obj.set(text[index], obj.get(text[index]) + 1);
    }
    return Array.from(obj);
  }

  for (const [text, expected] of examples) {
    it('text: ' + JSON.stringify(text), function() {
        assert.deepEqual(orderedCount(text), expected);
    });
  }

});
