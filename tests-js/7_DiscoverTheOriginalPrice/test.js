var assert = require('assert');

describe('Kyu 7: Discover The Original Price', function () {

	function discoverOriginalPrice(discountedPrice, salePercentage){
		return +(discountedPrice * 100 / (100 - salePercentage)).toFixed(2);
	}

	it("tests", () => {
		assert.equal(discoverOriginalPrice(75,25),100);
		assert.equal(discoverOriginalPrice(25,75),100);
		assert.equal(discoverOriginalPrice(75.75,25),101);

		assert.equal(discoverOriginalPrice(373.85,11.2),421);
	});
});
