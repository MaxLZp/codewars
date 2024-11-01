var assert = require('assert');

describe('Kyu 7: Asterisk it', function () {

  it("solution 1",function() {

    function asteriscIt(n) {
      n = n instanceof Array ? n.join('') : `${n}`;
      let result = '';
      for (let i = 0; i < n.length; i++) {
        result += n[i];
        if (n[i+1] != undefined && n[i] %2 == 0 && n[i+1] % 2 == 0) {
          result += '*';
        }

      }

      return result;
    };

    assert.equal(asteriscIt(5312708), '531270*8');
    assert.equal(asteriscIt(9682135), '96*8*2135');
    assert.equal(asteriscIt(2222), '2*2*2*2');
    assert.equal(asteriscIt(1111), '1111');
    assert.equal(asteriscIt(9999), '9999');
    assert.equal(asteriscIt('0000'), '0*0*0*0');
    assert.equal(asteriscIt(8), '8');
    assert.equal(asteriscIt(2), '2');
    assert.equal(asteriscIt(0), '0');
    assert.equal(asteriscIt([1, 4, 64, 68, 67, 23, 1]), '14*6*4*6*8*67231');

  })

  it("solution 2",function() {

    function asteriscIt(n) {
      n = n instanceof Array ? n.join('') : `${n}`;
      return n.replace(/(\d)(?=\d)/g, function(substring, s, i, str) {
        return str[i+1] != undefined && str[i] %2 == 0 && str[i+1] % 2 == 0 ? substring + '*' : substring;
      });
    }

    assert.equal(asteriscIt(5312708), '531270*8');
    assert.equal(asteriscIt(9682135), '96*8*2135');
    assert.equal(asteriscIt(2222), '2*2*2*2');
    assert.equal(asteriscIt(1111), '1111');
    assert.equal(asteriscIt(9999), '9999');
    assert.equal(asteriscIt('0000'), '0*0*0*0');
    assert.equal(asteriscIt(8), '8');
    assert.equal(asteriscIt(2), '2');
    assert.equal(asteriscIt(0), '0');
    assert.equal(asteriscIt([1, 4, 64, 68, 67, 23, 1]), '14*6*4*6*8*67231');
  })

  it("solution 3",function() {

    function asteriscIt(n) {
      n = n instanceof Array ? n.join('') : `${n}`;
      return n.replace(/([02468])(?=[02468])/g, '$1*');
    }

    assert.equal(asteriscIt(5312708), '531270*8');
    assert.equal(asteriscIt(9682135), '96*8*2135');
    assert.equal(asteriscIt(2222), '2*2*2*2');
    assert.equal(asteriscIt(1111), '1111');
    assert.equal(asteriscIt(9999), '9999');
    assert.equal(asteriscIt('0000'), '0*0*0*0');
    assert.equal(asteriscIt(8), '8');
    assert.equal(asteriscIt(2), '2');
    assert.equal(asteriscIt(0), '0');
    assert.equal(asteriscIt([1, 4, 64, 68, 67, 23, 1]), '14*6*4*6*8*67231');
  })

});

