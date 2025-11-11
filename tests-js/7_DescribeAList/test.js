var { assert } = require('chai');

describe('Kyu 7: Describe a list ', function () {

	function describeList(x) {
		var result = 'longer';
		if (x.length == 0) { result = 'empty'; }
		if (x.length == 1) { result = 'singleton'; }

		return result;
	}

	it("tests", () => {
		assert.equal(describeList([]), "empty");
		assert.equal(describeList([1]), "singleton");
		assert.equal(describeList([1,2]), "longer");
		assert.equal(describeList([]), "empty");
		assert.equal(describeList([1.5]), "singleton");
		assert.equal(describeList([1.5,2.5]), "longer");	 
	});
});
