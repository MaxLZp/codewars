var assert = require('assert');

describe('Kyu 7: Simple letter removal', function () {

  function solve(s, k){
    let letter = 'a'.charCodeAt(0);
    while (k > 0 && s != '') {
      if (s.indexOf(String.fromCharCode(letter)) == -1) {
        letter++;
      } else {
        s = s.replace(new RegExp(String.fromCharCode(letter)), '');
        k--;
      }

    }
    return s;
  }

  it("Fixed Tests", () => {
    assert.equal(solve('abracadabra', 1),'bracadabra');
    assert.equal(solve('abracadabra', 2),'brcadabra');
    assert.equal(solve('abracadabra', 6),'rcdbr');
    assert.equal(solve('abracadabra', 8),'rdr');
    assert.equal(solve('abracadabra', 50),'');


    assert.equal(solve('hxehmvkybeklnj', 5),'xmvkyklnj');
  });

});
