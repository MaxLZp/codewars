var assert = require('assert');

describe('Kyu 6: Remove anchor from URL', function () {

  function removeUrlAnchor(url){
    return url.replace(/#.*$/i, '');
  }

  it("should test transpose", function() {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
  });
});
