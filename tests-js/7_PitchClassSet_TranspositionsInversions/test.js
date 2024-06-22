var assert = require('assert');

describe('Kyu 7: Pitch Class Set - Transpositions/Inversions', function () {
	function operate(pcSet, operation) {
		var m = operation.match(/T(\d+)(i*)/i);
		var [t, i] = [m[1], m[2] != ''];

		return pcSet.map((e) => {
			return i ? (12 - e + +t) % 12 : (e + +t) % 12;
		}).sort((l, r) => (l - r));
	}

	it("sample tests", function() {
		assert.deepEqual(operate([1,2,3], "T1"), [2,3,4])
		assert.deepEqual(operate([1,2,3], "T0"), [1,2,3])
		assert.deepEqual(operate([1,2,3], "T0I"), [9,10,11])
		assert.deepEqual(operate([1,2,3], "T11"), [0,1,2])
		assert.deepEqual(operate([1,2,3], "T11I"), [8,9,10])
		assert.deepEqual(operate([1,2,3,7,10,11], "T10I"), [0,3,7,8,9,11])
	});

});

