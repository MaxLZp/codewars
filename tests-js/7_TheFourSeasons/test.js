const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: The Four Seasons', function () {

  function fourSeasons(d) {
    if (d > 365) { return 'The year flew by!'; }
    if (d < 80) { return 'Winter Season';}
    if (d < 172) { return 'Spring Season';}
    if (d < 264) { return 'Summer Season';}
    if (d < 355) { return 'Autumn Season';}
    if (d <= 365) { return 'Winter Season';}
  }

  it("tests",function() {
    assert.strictEqual(fourSeasons(236),'Summer Season');
    assert.strictEqual(fourSeasons(109),'Spring Season');
    assert.strictEqual(fourSeasons(312),'Autumn Season');
    assert.strictEqual(fourSeasons(1),'Winter Season');
    assert.strictEqual(fourSeasons(356),'Winter Season');
    assert.strictEqual(fourSeasons(400),'The year flew by!');

    assert.strictEqual(fourSeasons(80),'Spring Season');
  })

});
