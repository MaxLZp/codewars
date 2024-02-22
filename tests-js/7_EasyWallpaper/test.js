const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Easy wallpaper', function () {

  it('solution1', function () {
    function wallpaper(l, w, h) {
      var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
      if (w ==0 || l == 0) {return numbers[0];}
      return numbers[Math.ceil(2*(l+w)*h*1.15 / (0.52*10))];
    }

    assert.strictEqual(wallpaper(6.3, 4.5, 3.29), "sixteen");
    assert.strictEqual(wallpaper(7.8, 2.9, 3.29), "sixteen");
    assert.strictEqual(wallpaper(6.3, 5.8, 3.13), "seventeen");
    assert.strictEqual(wallpaper(6.1, 6.7, 2.81), "sixteen");
    assert.strictEqual(wallpaper(0, 5.6, 3.20), "zero");
  });

});
