const assert = require('chai').assert;


describe('Kyu 7: Simple Fun #334: Two Beggars And Gold', function () {

	function distributionOf(golds){
		let result = [0, 0];
		let i = 0;
		while(golds.length > 0) {
			if (golds[0] >= golds[golds.length - 1]) {
				result[i] += golds.shift();
			} else {
				result[i] += golds.pop();
			}
			i = ++i % 2;
		}

		return result;
	}

	it("It should works for basic tests.", function(){

		assert.deepEqual(distributionOf([4,7,2,9,5,2]),[11,18])
		assert.deepEqual(distributionOf([10,1000,2,1]),[12,1001])

	});

});
