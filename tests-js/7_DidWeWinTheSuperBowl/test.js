var assert = require('assert');

describe('Kyu 7: Did we win the Super Bowl?', function () {

  it('solution1', function () {

    function didWeWin(plays){
      var remaining = 10;
      for (let index = 0; index < plays.length; index++) {
        const element = plays[index];
        switch (element[1]) {
          case 'pass':
          case 'run':
            remaining -= element[0];
            break;
          case 'sack':
            remaining += element[0];
            break;
          case 'turnover':
            return false;
        }
        if (remaining < 0) { return true; }
      }
      return false;
    }

    assert.equal(didWeWin([[8, "pass"],[5, "sack"],[3, "sack"],[5, "run"]]), false)
    assert.equal(didWeWin([[12, "pass"],[],[],[]]), true)
    assert.equal(didWeWin([[2, "run"],[5, "pass"],[3, "sack"],[8, "pass"]]), true)
    assert.equal(didWeWin([[5, "pass"],[6, "turnover"],[],[]]), false)
  });

  it('Solution 2', function() {

    function didWeWin(plays){
      var bowl = {
        remaining: 10,
        isTurnover: false,
        pass: function(value) {this.remaining -= value},
        run: function(value) {this.remaining -= value},
        sack: function(value) {this.remaining += value},
        turnover: function() {this.isTurnover = true},
        isWon: function() { return !this.isTurnover && this.remaining < 0},
      }

      for (let index = 0; index < plays.length; index++) {
        if (plays[index].length == 0) break;
        bowl[plays[index][1]](plays[index][0]);
      }
      return bowl.isWon();
    }

    assert.equal(didWeWin([[8, "pass"],[5, "sack"],[3, "sack"],[5, "run"]]), false)
    assert.equal(didWeWin([[12, "pass"],[],[],[]]), true)
    assert.equal(didWeWin([[2, "run"],[5, "pass"],[3, "sack"],[8, "pass"]]), true)
    assert.equal(didWeWin([[5, "pass"],[6, "turnover"],[],[]]), false)
  });

});
