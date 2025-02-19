const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Turkish Numbers, 0-99', function () {

  const getTurkishNumber = (num) => {
    var map = {
      '0': 'sıfır',
      '1': 'bir',
      '2': 'iki',
      '3': 'üç',
      '4': 'dört',
      '5': 'beş',
      '6': 'altı',
      '7': 'yedi',
      '8': 'sekiz',
      '9': 'dokuz',
      '10': 'on',
      '20': 'yirmi',
      '30': 'otuz',
      '40': 'kırk',
      '50': 'elli',
      '60': 'altmış',
      '70': 'yetmiş',
      '80': 'seksen',
      '90': 'doksan'
    };

    var ten = Math.floor(num / 10)*10;
    var unit = num % 10;

    return ((ten > 0 ? `${map[ten]} ` : '') + (unit == 0 && ten > 0 ? '' : `${map[unit]}`)).trim();
  }

  const tests = [
    [0,  "sıfır"],
    [16, "on altı"],
    [70, "yetmiş"],
    [26, "yirmi altı"],
  ];

  for (const [input, output] of tests) {
    it(`input: ${JSON.stringify(input)}`, function() {
      assert.strictEqual(getTurkishNumber(input), output);
    });
  }

});
