var assert = require('assert');

describe('Kyu 7: Training JS #40: Regular Expression--"|", "[]" and "()"', function () {

  var regex=/https?:\/\/[a-z0-9\.]+\.(com|net)/ig;

  it("Tests", function() {
    assert.deepEqual("http://codewars.com".match(regex), [ 'http://codewars.com' ]);
    assert.deepEqual("http://www.codewars.com".match(regex), [ 'http://www.codewars.com' ]);
    assert.deepEqual("HTTP://CODEWARS.COM".match(regex), [ 'HTTP://CODEWARS.COM' ]);
    assert.deepEqual("https://www.codewars.com".match(regex), [ 'https://www.codewars.com' ]);
    assert.deepEqual("http://www.codewars.net".match(regex), [ 'http://www.codewars.net' ]);
    assert.deepEqual("1234http://www.codewars.comabcd".match(regex), [ 'http://www.codewars.com' ]);
    assert.deepEqual("http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex), [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]);
    assert.deepEqual("http://www.codewars1.comabchttp://www.codewars2.net".match(regex), [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]);
    assert.deepEqual("http://www.codewars.com.net".match(regex), [ 'http://www.codewars.com.net' ]);
    assert.deepEqual("http://www.codewars.com.fak".match(regex), [ 'http://www.codewars.com' ]);
    assert.deepEqual("ftp://www.codewars.com".match(regex),null);
    assert.deepEqual("http://www.code#wars.com".match(regex),null);
    assert.deepEqual("http://www.codewars.org".match(regex),null);
    assert.deepEqual("http://www . codewars . com".match(regex),null);
    assert.deepEqual("http://mail@codewars.com".match(regex),null);
    assert.deepEqual("http://.com".match(regex), null);
  });

});
