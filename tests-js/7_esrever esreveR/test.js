var assert = require('assert');

describe('Kyu 7: esrever esreveR!', function () {

  it('solution1', function () {
    function esrever( str ){
      if (!str) { return ''; }
      var sarr = str.split('').reverse();
      sarr.push(sarr.shift());
      return sarr.join('');
    }

    assert.equal(esrever('an Easy one?'), 'eno ysaE na?');
    assert.equal(esrever('a small lOan OF 1,000,000 $!'), '$ 000,000,1 FO naOl llams a!');
    assert.equal(esrever('<?> &!.".'), '".!& >?<.');
    assert.equal(esrever('b3tTer p4ss thIS 0ne.'), 'en0 SIht ss4p reTt3b.');
    assert.equal(esrever(''), '');
  });

  it('solution2', function () {
    function esrever( str ){
      return str.slice(0, -1).split('').reverse().join('')+str.slice(-1);
    }

    assert.equal(esrever('an Easy one?'), 'eno ysaE na?');
    assert.equal(esrever('a small lOan OF 1,000,000 $!'), '$ 000,000,1 FO naOl llams a!');
    assert.equal(esrever('<?> &!.".'), '".!& >?<.');
    assert.equal(esrever('b3tTer p4ss thIS 0ne.'), 'en0 SIht ss4p reTt3b.');
    assert.equal(esrever(''), '');
  });

});
