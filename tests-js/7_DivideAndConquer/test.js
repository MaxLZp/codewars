const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Divide and Conquer', function () {

	function divCon(x){
		return x.reduce((c, e) => ('string' === (typeof e) ? c - +e : c + e), 0);
	}

	it("tests", () => {
		assert.strictEqual(divCon([9, 3, '7', '3']), 2);
		assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
		assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
	});

});
