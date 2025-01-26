const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Showing X to Y of Z Products.', function () {

  it('solution1', function () {
    var paginationText = function(pageNumber, pageSize, totalProducts){
      return `Showing ${1 + (pageNumber - 1) * pageSize} to ${Math.min(totalProducts, pageNumber * pageSize)} of ${totalProducts} Products.`;
    }

    assert.strictEqual(paginationText(1,10,30),"Showing 1 to 10 of 30 Products.")
    assert.strictEqual(paginationText(3,10,26),"Showing 21 to 26 of 26 Products.")
    assert.strictEqual(paginationText(1,10,8),"Showing 1 to 8 of 8 Products.")
    assert.strictEqual(paginationText(2,30,350),"Showing 31 to 60 of 350 Products.")
    assert.strictEqual(paginationText(1,23,30),"Showing 1 to 23 of 30 Products.")
    assert.strictEqual(paginationText(2,23,30),"Showing 24 to 30 of 30 Products.")
    assert.strictEqual(paginationText(43,15,3456),"Showing 631 to 645 of 3456 Products.")
  });

});
