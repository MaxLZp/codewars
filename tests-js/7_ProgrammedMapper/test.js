var assert = require('assert');

describe('Kyu 7: Programmed mapper', function () {

  function mapEmUp (input, mappers) {
    return input.map(e => {
      for (mapper of mappers) {
        if (mapper[0](e)) {
          return mapper[1](e);
        }
      }
      return -1;
    });
  }
  
  var input = [1, 2, 3, 4, 5];

  it(`Tests`, function() {
    var mappers = [
      [ 
        function (i) { return i>4; },
        function (i) { return i; }
      ],
      [
        function (i) { return i; },
        function (i) { return "x"; }
      ]
    ];

    assert.deepEqual(mapEmUp(input, mappers), ["x", "x", "x", "x", 5], "Maps number correctly");

  });
});
