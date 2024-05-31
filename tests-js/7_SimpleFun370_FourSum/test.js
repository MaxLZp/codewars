const { assert, config } = require("chai")
config.truncateThreshold = 0

describe('Kyu 7: Simple Fun #370: Four Sum', function () {

	function fourSum(A,B,C,D){
		var set = new Set();
		for (let ai = 0; ai < A.length; ai++) {
			for (let bi = 0; bi < A.length; bi++) {
				for (let ci = 0; ci < A.length; ci++) {
					for (let di = 0; di < A.length; di++) {
						if ( A[ai] + B[bi] + C[ci] + D[di] == 0) {
							set.add(`${A[ai]}|${B[bi]}|${C[ci]}|${D[di]}`);
						}
					}
				}
			}
		}
		return set.size;
	}

	it("It should work for basic tests.", function () {
	assert.strictEqual(fourSum(
		[-45, -41, -36, -36, 26, -32],
		[22, -27, 53, 30, 38, -54],
		[42, 56, -37, -75, -10, -6],
		[-16, 30, 77, -46, 62, 45]), 5, `fourSum(\n[-45, -41, -36, -36, 26, -32],\n[22, -27, 53, 30, 38, -54],\n[42, 56, -37, -75, -10, -6],\n[-16, 30, 77, -46, 62, 45])`)

	assert.strictEqual(fourSum(
		[1, 2],
		[2, 2],
		[3, 3],
		[-6, -6]), 1, `fourSum(\n[1, 2],\n[2, 2],\n[3, 3],\n[-6, -6])`)

	assert.strictEqual(fourSum(
		[1, -2],
		[2, 5],
		[3, 2],
		[-6, -6]), 2, `fourSum(\n[1, -2],\n[2, 5],\n[3, 2],\n[-6, -6]`)

	})

});
