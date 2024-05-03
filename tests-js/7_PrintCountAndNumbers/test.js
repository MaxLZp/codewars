var assert = require('assert');

describe('Kyu 7: Print count and numbers', function () {

  it("Solution 1", function() {
    function countMe(data){
      if (data == '' || data != parseInt(data)) { return ''; }

      var prev = data[0];
      var count = 1;
      var result = '';

      for (let i = 1; i < data.length; i++) {
        if (data[i] == prev) {
          count++;
          continue;
        }
        result += count + prev;
        count = 1;
        prev = data[i];
      }
      result += count + prev;

      return result;
    }

    assert.equal(countMe('1123'), '211213');
    assert.equal(countMe('1'), '11');
    assert.equal(countMe('11'), '21');
    assert.equal(countMe('a'), '');
    assert.equal(countMe('a123'), '');
    assert.equal(countMe('21'), '1211');
    assert.equal(countMe('1211'), '111221');
    assert.equal(countMe('12322212223443'), '111213321132132413');
    assert.equal(countMe(''), '');
    assert.equal(countMe('123a'), '');
  });

  it("Solution 2", function() {
    function countMe(data){
      if (/[\D]/g.test(data)) { return ''; }

      return data.replace(/(\d)\1*/g, (v, c) => (v.length + c));
    }

    assert.equal(countMe('1123'), '211213');
    assert.equal(countMe('1'), '11');
    assert.equal(countMe('11'), '21');
    assert.equal(countMe('a'), '');
    assert.equal(countMe('a123'), '');
    assert.equal(countMe('21'), '1211');
    assert.equal(countMe('1211'), '111221');
    assert.equal(countMe('12322212223443'), '111213321132132413');
    assert.equal(countMe(''), '');
    assert.equal(countMe('123a'), '');
  });

});
