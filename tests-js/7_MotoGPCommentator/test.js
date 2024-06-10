const { assert } = require('chai');
const name = 'Marc Marquez'

describe('Kyu 7: MotoGP commentator', function () {

  const gridPosition = (name, position) => {
    var pos = 'pole position';
    if (position > 1) {
      switch (position % 3) {
        case 1: pos = 'the top of the'; break;
        case 2: pos = 'the middle of the'; break;
        default: pos = 'the bottom of the'; break;
      }

      var row = Math.floor((position - 1) / 3);
      switch (row) {
        case 0: pos += ' front row'; break;
        case 1: pos += ` ${row+1}nd row`; break;
        case 2: pos += ` ${row+1}rd row`; break;
        default: pos += ` ${row+1}th row`; break;
      }
    }

    return `${name} starts from ${pos}`;
  }

  it('Racer is in the front row', () => {
    assert.strictEqual(
      gridPosition(name, 2),
      'Marc Marquez starts from the middle of the front row',
      'Incorrect answer for rider = Marc Marquez, position = 2'
    );
    assert.strictEqual(
      gridPosition(name, 3),
      'Marc Marquez starts from the bottom of the front row',
      'Incorrect answer for rider = Marc Marquez, position = 3'
    );
  });
  it('Racer is in pole', () => {
    assert.strictEqual(
      gridPosition(name, 1),
      'Marc Marquez starts from pole position',
      'Incorrect answer for rider = Marc Marquez, position = 1'
    );
  });
  it('Racer in various positions', () => {
    assert.strictEqual(
      gridPosition(name, 11),
      'Marc Marquez starts from the middle of the 4th row',
      'Incorrect answer for rider = Marc Marquez, position = 11'
    );
    assert.strictEqual(
      gridPosition(name, 13),
      'Marc Marquez starts from the top of the 5th row',
      'Incorrect answer for rider = Marc Marquez, position = 13'
    );
    assert.strictEqual(
      gridPosition(name, 9),
      'Marc Marquez starts from the bottom of the 3rd row'
    );
  });

});
