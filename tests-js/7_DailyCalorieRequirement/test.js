var assert = require('assert');

describe('Kyu 7: Daily Calorie Requirement ', function () {

	function calorie (member){
		const activityFactor = {
			'little activity': 1.2,
			'moderately active': 1.55,
			'very active': 1.7,
			'extremely active': 1.9,
		};
		var kcal = (10 * member[4] + 6.25 * member[3] - 5 * member[2] + (member[1] == 'f' ? -161 : 5)) * activityFactor[member[5]];
		kcal = Math.round(kcal*100) / 100;

		return `${member[0]}´s daily calorie requirement is ${kcal.toFixed(2)} kcal.`;
	}

	it("tests", () => {
		assert.equal(calorie(["Liz", "f", 29, 170, 60, "very active"]), 'Liz´s daily calorie requirement is 2306.05 kcal.')
		assert.equal(calorie(["Marc", "m", 38, 190, 90, "moderately active"]), 'Marc´s daily calorie requirement is 2948.88 kcal.')
		assert.equal(calorie(["Oliver", "m", 75, 178, 85, "little activity"]), 'Oliver´s daily calorie requirement is 1911.00 kcal.')
		assert.equal(calorie(["Sandra", "f", 17, 165, 61, "extremely active"]), 'Sandra´s daily calorie requirement is 2650.98 kcal.')
	});
});
