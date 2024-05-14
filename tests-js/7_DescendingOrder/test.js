var { assert } = require('chai');

describe('Kyu 7: Descending Order', function () {

	function descendingOrder(n){
		return +(`${n}`.split('').sort((l, r) => (+r - +l)).join(''));
	}

	it("tests", () => {
		assert.strictEqual(descendingOrder(0), 0)
		assert.strictEqual(descendingOrder(1), 1)
		assert.strictEqual(descendingOrder(111), 111)
		assert.strictEqual(descendingOrder(15), 51)
		assert.strictEqual(descendingOrder(1021), 2110)
		assert.strictEqual(descendingOrder(123456789), 987654321)
	});
});
