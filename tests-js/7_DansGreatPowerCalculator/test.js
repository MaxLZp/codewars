var assert = require('assert');

describe('Kyu 7: Dan\'s great power generator', function () {

	function danspower(num, power) {
		var pow = Math.pow(num, power);
		return pow % 2 == 0 ? pow : Math.round(pow / 10) * 10;
	}

  it ('should calculate the nth power of number, rounded to nearest 10 if not even', function() {
	assert.equal(danspower(5,0), 0);
	assert.equal(danspower(2,0), 0);
	assert.equal(danspower(8,1), 8);
	assert.equal(danspower(3,1), 0);
	assert.equal(danspower(7,2), 50);
	assert.equal(danspower(9,2), 80);
	assert.equal(danspower(4,2), 16);
	assert.equal(danspower(0,2), 0);
	assert.equal(danspower(5,2), 30);
	assert.equal(danspower(0,3), 0);
	assert.equal(danspower(5,3), 130);
	assert.equal(danspower(6,4), 1296);
	assert.equal(danspower(3,4), 80);
	assert.equal(danspower(6,9), 10077696);
	assert.equal(danspower(3,10), 59050);
});
});
