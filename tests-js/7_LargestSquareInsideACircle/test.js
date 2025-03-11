const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Largest Square Inside A Circle', function () {

	function areaLargestSquare(r) {
        return 2 * r * r ;
    }

	it("Fixed tests", function () {
        assert.strictEqual(areaLargestSquare(5), 50);
        assert.strictEqual(areaLargestSquare(7), 98);
        assert.strictEqual(areaLargestSquare(15), 450);
	});

});
