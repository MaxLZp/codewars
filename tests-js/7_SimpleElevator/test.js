var assert = require('assert');

describe('Kyu 7: Simple elevator', function () {

  function goto(level,button){
    if (
      typeof level != 'number'
      ||
      typeof button != 'string'
      ||
      level > 3
      ||
      +button > 3
      ||
      (Math.round(level) != level)
    ) {
      return 0;
    }
    var diff = button - level;

    return (diff < -3 || diff > 3 ? 0 : diff);
  }

  it("Fixed Tests", () => {
    assert.equal(goto(0,'2'),2);
    assert.equal(3+goto(3,'1'),1);
    assert.equal(2+goto(2,'2'),2);

    assert.equal(goto([],'2'),0);
  });

});
