var assert = require('assert');

describe('Kyu 7: Difference between two collections', function () {

	function diff(a, b){
		return [
			...(new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))]))
		].sort();
	}

	it("should return empty for the same content",() =>{
		assert.deepEqual(diff(["a","b"], ["a","b"]), []);
	});

	it("should return A if B is empty",() =>{
		a = ["a","b"];
		b = [];
		assert.deepEqual(diff(a, b), a);
	});

	it("should return B if A is empty",() =>{
		a = [];
		b = ["a","b"];
		assert.deepEqual(diff(a, b), b);
	});

	it("should return empty for the empty content",() =>{
		assert.deepEqual(diff([], []), []);
	});

	it("should return the last character",() =>{
		a = ["a","b","z"];
		b = ["a","b"];
		assert.deepEqual(diff(a, b), ["z"]);
	});

	it("should return the sorted characteres",() =>{
		a = ["a","b","z","d","e","d"];
		b = ["a","b", "j","j"];
		assert.deepEqual(diff(a, b), ["d","e","j","z"]);
	});

});
