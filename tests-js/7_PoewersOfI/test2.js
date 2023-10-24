var assert = require('assert');

describe('Kyu 7: Powers of i. Solution2', function () {

	function pofi(n){
		switch (n%4) {
			case 0: return '1'
			case 1: return 'i'
			case 2: return '-1'
			case 3: return '-i'
		  }
	}

	it("tests", () => {
		assert.equal(pofi(0),'1');
		assert.equal(pofi(1),'i');
		assert.equal(pofi(2),'-1');
		assert.equal(pofi(3),'-i');
		assert.equal(pofi(4),'1');
		assert.equal(pofi(5),'i');
		assert.equal(pofi(6),'-1');
		assert.equal(pofi(7),'-i');
		assert.equal(pofi(8),'1');
		assert.equal(pofi(9),'i');
		assert.equal(pofi(10),'-1');
	});
});
