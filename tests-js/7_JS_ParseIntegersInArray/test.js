var assert = require('assert');

describe('Kyu 7: [JS] Parse integers in array', function () {

  it('Test', () => {

    /**
     * Function converts array of string to array of integers.
     * @param  {Array} of numbers in form of string
     * @return {Array} of integer numbers 
     */
    var parseNumbers = function(intStrs) {
      // before - incorrect
      // return intStrs.map(parseInt);

      // after - correct
      // map passes 2 arguments to parseInt - value and index.
      // parseInt considers index as radix ans cannot parse value
      return intStrs.map(str => parseInt(str));
    }

    assert.deepEqual(parseNumbers([]), []);
    assert.deepEqual(parseNumbers(['13']), [13]);
    assert.deepEqual(parseNumbers(['2.48']), [2]);
    assert.deepEqual(parseNumbers(['8', '16', '24', '36']), [ 8, 16, 24, 36 ]);
    

  });

});

