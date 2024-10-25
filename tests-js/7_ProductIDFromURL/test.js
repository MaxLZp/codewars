var assert = require('assert');

describe('Kyu 7: Product ID from URL', function () {

  function getProductId(url){
    // return url.match(/p-(\d+)-\d{8}\.html/)[1];
    return url.match(/p-(\d+)-\d{8}/)[1];
  }


  it(`Tests`, function() {
    assert.equal(getProductId("http://www.exampleshop.com/fancy-coffee-cup-p-90764-12052019.html"), "90764", 'should return 90764');
    assert.equal(getProductId("http://www.exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html"), "147", 'should return 147');
    assert.equal(getProductId("http://www.exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html"), "942312798", 'should return 942312798');
  });
});
