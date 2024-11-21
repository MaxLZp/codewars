var assert = require('assert');

describe('Kyu 7: Figure Out the Notes', function () {

  const whatNote = (string, fret) => {
    const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

    let i = fret + notes.indexOf(string.toUpperCase());

    return notes[i % notes.length];
  };

  it('solution1', function () {
    assert.equal(whatNote("e", 0), "E")
    assert.equal(whatNote("D", 5), "G")
    assert.equal(whatNote("E", 18), "A#")
    assert.equal(whatNote("A", 1), "A#")
    assert.equal(whatNote("B", 8), "G")
  });

});
