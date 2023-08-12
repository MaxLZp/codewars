var assert = require('assert');

describe('Kyu 7: Who Took The Car Key?', function () {
  it('solution1', function () {

    assert.strictEqual(whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']), 'Alexander');

    function whoTookTheCarKey(message) {
      return message.map(function(number) {
        return String.fromCharCode(parseInt(number, 2)); }
      ).join('');
    }
  });

});
