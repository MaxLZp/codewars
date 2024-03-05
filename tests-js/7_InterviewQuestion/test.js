var assert = require('assert');

describe('Kyu 7: Interview Question (easy)', function () {

  function getStrings(city){
    var map = new Map();
    [...city.toLowerCase().replace(/[^a-z]/g, '')].forEach((v, i, a) => {
      if(map.has(v)) {
        var vv = map.get(v);
        map.set(v, vv+'*');
      } else {
        map.set(v, '*');
      }
    });
    var str = [];
    map.forEach((v, k, m) => {
      str.push(k+':'+v);
    });
    return str.join(',');
  }

  it("Fixed Tests", () => {
    assert.equal(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
    assert.equal(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
    assert.equal(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
    assert.equal(getStrings("Ho Chi Minh City"), "h:***,o:*,c:**,i:***,m:*,n:*,t:*,y:*");
  });

});
