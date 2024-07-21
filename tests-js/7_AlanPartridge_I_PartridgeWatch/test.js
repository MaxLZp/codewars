const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Alan Partridge I - Partridge Watch', function () {

  function part(x){
    const relatedTerms = [
      'Partridge',
      'PearTree',
      'Chat',
      'Dan',
      'Toblerone',
      'Lynn',
      'AlphaPapa',
      'Nomad',
    ];

    var count = x.reduce((c, e) => {
      return relatedTerms.indexOf(e) >= 0 ? c + 1 : c;
    }, 0)

    return count ? 'Mine\'s a Pint'+'!'.repeat(count) : 'Lynn, I\'ve pierced my foot on a spike!!';
  }

  it("containAllRots",function() {
    assert.strictEqual(part(['Grouse', 'Partridge', 'Pheasant']), 'Mine\'s a Pint!');
    assert.strictEqual(part(['Pheasant', 'Goose', 'Starling', 'Robin']), 'Lynn, I\'ve pierced my foot on a spike!!');
    assert.strictEqual(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']), 'Mine\'s a Pint!!!!!!!!');
  })

});
