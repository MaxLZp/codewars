var assert = require('assert');

describe('Kyu 7: Digital Synesthesia', function () {

  function MusicToColor(music) {
    return !music ? []
      : music.match(/.{3}/ig)
        .map((t) => ('#' + t.split('').map((c) => (c.charCodeAt(0).toString(16))).join('').toUpperCase()));
  }

  it("test", () => {
    assert.equal(MusicToColor("ABCde").toString(), ['#414243'].toString());
    assert.equal(MusicToColor("ABC").toString(), ['#414243'].toString());
  });
});
