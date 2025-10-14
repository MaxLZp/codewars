const assert = require('chai').assert;

describe('Kyu 7: Pizza Payments', function () {
	
	function michaelPays(costs) {
		var michaelPays = costs;
		if (costs >= 5) { 
			var katePays = costs / 3;
			michaelPays = costs - (katePays > 10 ? 10 : katePays);
		}

		return +michaelPays.toFixed(2);
	}

	it("sample tests", function() {
		assert.strictEqual(michaelPays(15), 10);
		assert.strictEqual(michaelPays(4), 4);
		assert.strictEqual(michaelPays(30), 20);
		assert.strictEqual(michaelPays(80), 70);
		assert.strictEqual(michaelPays(22), 14.67);
		assert.strictEqual(michaelPays(5.9181), 3.95);
		assert.strictEqual(michaelPays(28.789), 19.19);
		assert.strictEqual(michaelPays(4.325), 4.33);	

		assert.strictEqual(michaelPays(5), 3.33);	
	});

});

