var assert = require('assert');

describe('Kyu 7: Colored Hexes!', function () {

  function hexColor(codes){
    if (codes.length == 0) { codes = '000 000 000'; }
    var colors = codes.split(' ').map(Number);

    var max = Math.max(...colors);
    colors = colors.map((color) => { return color == max && max != 0 ? '1' : '0'});

    var map = {
      '000': 'black',
      '001': 'blue',
      '010': 'green',
      '011': 'cyan',
      '100': 'red',
      '101': 'magenta',
      '110': 'yellow',
      '111': 'white',
    };
    return map[colors.join('')];
  }


  it("Should pass sample tests", () => {
    assert.equal(hexColor(''), 'black')
    assert.equal(hexColor('000 000 000'), 'black')
    assert.equal(hexColor('121 245 255'), 'blue')
    assert.equal(hexColor('027 100 100'), 'cyan')
    assert.equal(hexColor('021 021 021'), 'white')
    assert.equal(hexColor('255 000 000'), 'red')
    assert.equal(hexColor('000 147 000'), 'green')
    assert.equal(hexColor('212 103 212'), 'magenta')
    assert.equal(hexColor('101 101 092'), 'yellow')
  });

});
