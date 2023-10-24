var assert = require('assert');

describe('Kyu 7: Powers of i', function () {

	function pofi(n){
		if (n%2 == 0) { return `${Math.pow(-1, (n/2))}`; }
		let sign = Number.isInteger((n - 1) / 4) ? '' : '-';
		return `${sign}i`;
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
