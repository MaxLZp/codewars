var assert = require('assert');

describe('Kyu 6: Training JS #41: Regular Expression--"\"', function () {

  var regex=/\b(\w)(\w?)(\w?)\w?\3\2\1\b/g;

  it("Tests", function() {
    assert.deepEqual("aa bbb cccc ddddd eeeeee fffffff".match(regex), [ 'aa', 'bbb', 'cccc', 'ddddd', 'eeeeee', 'fffffff' ]);
    assert.deepEqual("aaa bcccd".match(regex), [ 'aaa' ]);
    assert.deepEqual("_x_x_ --- ~~|~~".match(regex), [ '_x_x_' ]);
    assert.deepEqual("ABCDCBA ABABABA".match(regex), [ 'ABCDCBA', 'ABABABA' ]);
    assert.deepEqual("121 1221 13577531 11211".match(regex) , [ '121', '1221', '11211' ]);
    assert.deepEqual("aabbbcccc d".match(regex), null);
    assert.deepEqual("abbA CdDc".match(regex), null);
    assert.deepEqual("1    1".match(regex), null  );
    assert.deepEqual("1231 12341 123451 1234561".match(regex), null  );
  });

});
