var assert = require('assert');

describe('Kyu 7: Help Suzuki rake his garden!', function () {

  it('solution1', function () {
    function rakeGarden(garden) {
      return garden.split(' ').map(w => w == 'gravel' || w == 'rock' ? w : 'gravel').join(' ');
      // return garden.replace(/(?!(gravel|rock)\b)\b\w+/g, `gravel`);
    }

    var garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
    assert.strictEqual(rakeGarden(garden1),'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel');
    var garden2 = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel';
    assert.strictEqual(rakeGarden(garden2), 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel gravel rock gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel gravel gravel gravel gravel gravel rock gravel gravel');
  });

});
