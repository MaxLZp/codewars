var assert = require('assert');

describe('Kyu 7: Which section did you scroll to?', function () {

  // return an index of section or -1 if past last section
  // scrollY is a positive integer and sizes is an array of positive integers
  function getSectionIdFromScroll(scrollY,sizes){
    for (let i = 0, s = sizes[0]; i < sizes.length; i++, s += sizes[i]) {
      if (scrollY < s) { return i; }
    }
    return -1;
  }

  it("given 299,[300,200,400,600,100]", function() {
    assert.deepEqual(getSectionIdFromScroll(299,[300,200,400,600,100]), 0);
  });
  it("given 300,[300,200,400,600,100]", function() {
    assert.deepEqual(getSectionIdFromScroll(300,[300,200,400,600,100]), 1);
  });
  it("given 1600,[300,200,400,600,100]", function() {
    assert.deepEqual(getSectionIdFromScroll(1600,[300,200,400,600,100]), -1);
  });

  it("given 1599,[300,200,400,600,100]", function() {
    assert.deepEqual(getSectionIdFromScroll(1599,[300,200,400,600,100]), 4);
  });
  it("given 599,[241,337,391,125,114]", function() {
    assert.deepEqual(getSectionIdFromScroll(599,[241,337,391,125,114]), 2);
  });

});
