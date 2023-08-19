var assert = require('assert');

describe('Kyu 7: Selective fear of numbers', function () {

  var AmIAfraid = function(day, num){
    switch (day) {
      case 'Monday':
        return 12 === num;
      case 'Tuesday':
        return num > 95;
      case 'Wednesday':
        return 34 === num;
      case 'Thursday':
        return 0 === num;
      case 'Friday':
        return num % 2 == 0;
      case 'Saturday':
        return 56 === num;
      case 'Sunday':
        return 666 === Math.abs(num);
      default:
        return false;
    }
  }

  it("Fixed Tests", () => {
    assert.equal(AmIAfraid("Monday", 13), false, 'Should return false');
    assert.equal(AmIAfraid("Sunday", -666), true, 'Should return true');
    assert.equal(AmIAfraid("Tuesday", 2), false, 'Should return false');
    assert.equal(AmIAfraid("Tuesday", 965), true, 'Should return true');
    assert.equal(AmIAfraid("Friday", 2), true, 'Should return true');
  });

});
