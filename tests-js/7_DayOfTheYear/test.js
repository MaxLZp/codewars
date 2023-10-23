var assert = require('assert');

describe('Kyu 7: Day of the Year', function () {

  function toDayOfYear(arr) {
    let days = arr[0];
    for (let index = 0; index < arr[1]-1; index++) {
      days += (new Date(arr[2], index+1, 0)).getDate();
    }
    return days;
  }

	it("tests", () => {
		assert.equal(toDayOfYear([15, 1, 2017]), 15);
		assert.equal(toDayOfYear([2, 2, 2017]), 33);
		assert.equal(toDayOfYear([25, 2, 2017]), 56);
		assert.equal(toDayOfYear([1, 3, 2017]), 60);
		assert.equal(toDayOfYear([25, 12, 2017]), 359);
		assert.equal(toDayOfYear([31, 10, 1991]), 304);
		assert.equal(toDayOfYear([1, 5, 3000]), 121);
		assert.equal(toDayOfYear([14, 3, 1066]), 73);
		assert.equal(toDayOfYear([5, 11, 1604]), 310);

		assert.equal(toDayOfYear([31, 12, 2000]), 366);
		assert.equal(toDayOfYear([31, 12, 2001]), 365);
		assert.equal(toDayOfYear([31, 12, 2004]), 366);
		assert.equal(toDayOfYear([31, 12, 2100]), 365);
		assert.equal(toDayOfYear([1, 3, 1920]), 60);
	});
});
