var assert = require('assert');

describe('Kyu 7: Podcast Speed Listening Calculator ', function () {

  function speedListen(audioLength, playSpeed) {
    let duration = audioLength.split(':');
    duration = 3600 * +duration[0] + 60 * +duration[1] + +duration[2];
    duration = Math.floor(duration / playSpeed);
    let hh = Math.floor(duration / 3600);
    let mm = Math.floor((duration - hh * 3600) / 60);
    let ii = duration - hh * 3600 - mm * 60;

    return `${hh}`.padStart(2, '0') + ':'
      + `${mm}`.padStart(2, '0') + ':'
      + `${ii}`.padStart(2, '0');
  }

  it("Check Short length Positives", function(){
    assert.equal(speedListen("00:30:00", 2), "00:15:00");
    assert.equal(speedListen("01:20:00", 1.5), "00:53:20");
  })

});

