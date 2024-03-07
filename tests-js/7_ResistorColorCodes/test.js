var assert = require('assert');

describe('Kyu 7: Resistor Color Codes', function () {

  function decodeResistorColors(bands) {
    const map = {
      "black": 0,
      "brown": 1,
      "red": 2,
      "orange": 3,
      "yellow": 4,
      "green": 5,
      "blue": 6,
      "violet": 7,
      "gray": 8,
      "white": 9,
      "gold": 5,
      "silver": 10
    };
    bands = bands.split(' ');
    var tolerance = bands[3] ? map[bands[3]] : 20;

    var magnitude = +`${map[bands[0]]}${map[bands[1]]}` * Math.pow(10, map[bands[2]]);
    if (magnitude >= 1000000) {
      magnitude = magnitude/1000000 + 'M';
    } else if (magnitude >= 1000) {
      magnitude = magnitude / 1000 + 'k';
    }
    return `${magnitude} ohms, ${tolerance}%`;
  }

  it ("A resistor under 1000 ohms and with only three bands", function(){
    assert.equal(decodeResistorColors("yellow violet black"), "47 ohms, 20%");
  });
  it ("A resistor between 1000 and 999999 ohms, with a gold fourth band", function(){
    assert.equal(decodeResistorColors("yellow violet red gold"), "4.7k ohms, 5%");
  });
  it ("A resistor of 1000000 ohms or above, with a silver fourth band", function(){
    assert.equal(decodeResistorColors("brown black green silver"), "1M ohms, 10%");
  });

});
