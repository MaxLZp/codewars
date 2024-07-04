var assert = require('assert');

describe('Kyu 7: Pitches and Notes', function () {

	function getNote(pitch) {
		const notesDictionary = {
			440: "A",
			466.16: "A#",
			493.88: "B",
			523.25: "C",
			554.37: "C#",
			587.33: "D",
			622.25: "D#",
			659.25: "E",
			698.46: "F",
			739.99: "F#",
			783.99: "G",
			830.61: "G#"
		}

		for (const key of Object.getOwnPropertyNames(notesDictionary)) {
			if (Number.isInteger(Math.max(key, pitch) / Math.min(key, pitch))) {
				return notesDictionary[key];
			}
		}

		return '';
	}

	it("sample tests", function() {
		assert.equal(getNote(440), "A");
		assert.equal(getNote(220), "A");
		assert.equal(getNote(880), "A");
		assert.equal(getNote(523.25), "C");
		assert.equal(getNote(261.625), "C");
		assert.equal(getNote(1046.5), "C");

		assert.equal(getNote(123.47), "B");
		assert.equal(getNote(11839.84), "F#");
	});

});

