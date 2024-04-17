var assert = require('assert');

describe('Kyu 7: Training JS #38: Regular Expression--"^","$", "." and test()', function () {

  function findSimilarity(str,word){
    var re = word
      .replace(/./g, '.')
      .replace(/^./, word[0])
      .replace(/.$/, word.slice(-1));
    re = new RegExp('^'+re+'$');
    return str.split(' ')
      .filter((w) => (re.test(w)))
      .join(' ');
  }

  it("Tests", function() {
    assert.equal(findSimilarity("bag dog dig dot doog dogs","dog") , "dog dig");
    assert.equal(findSimilarity("bag dog dig dot doog dogs","dig") , "dog dig");
    assert.equal(findSimilarity("bag dog dig dot doog dogs","dot") , "dot");
    assert.equal(findSimilarity("bag dog dig dot doog dogs","god") , "");
    assert.equal(findSimilarity("vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF","SWyfC") , "SImLC SxTdC SdmKC");

  });

});
