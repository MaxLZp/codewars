const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Deutschstunde', function () {

	function derDieDas(wort){
		let article = 'die';
		const vowelsCount = (wort.match(/[aeiouäöü]/gi) || []).length;
		if (vowelsCount < 2) {
			article = 'das';
		} else if (vowelsCount > 3) {
			article = 'der';
		}
		return `${article} ${wort}`;
	}

	it("tests", () => {
		assert.strictEqual(derDieDas(''), 'das ', 'Empty -> das ');
		assert.strictEqual(derDieDas('pFwW'), 'das pFwW', 'no vowels -> das pFwW');
		assert.strictEqual(derDieDas('OOOpa'), 'der OOOpa', '4 Vokale -> der OOOpa');
		assert.strictEqual(derDieDas('Suppenhuhn'), 'die Suppenhuhn', '3 Vokale -> die Suppenhuhn');
		assert.strictEqual(derDieDas('Geheimdienst'), 'der Geheimdienst', '5 Vokale -> der Geheimdienst');
		assert.strictEqual(derDieDas('Ofenkartoffel'), 'der Ofenkartoffel', '5 Vokale -> der Ofenkartoffel');
		assert.strictEqual(derDieDas('Fisch'), 'das Fisch', '1 Vokal -> das Fisch');
		assert.strictEqual(derDieDas('Knödel'), 'die Knödel', '1 Umlaut, 1 Vokal -> die Knödel');
		assert.strictEqual(derDieDas('Leberkaassemmi'), 'der Leberkaassemmi', '6 Vokale -> der Leberkaassemmi');
    });

});
