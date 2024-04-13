const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Name That Number!', function () {

  function nameThatNumber(num) {
    var nums = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
      '10': 'ten',
      '11': 'eleven',
      '12': 'twelve',
      '13': 'thirteen',
      '14': 'fourteen',
      '15': 'fifteen',
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen',
      '19': 'nineteen',
      '20': 'twenty',
      '30': 'thirty',
      '40': 'forty',
      '50': 'fifty',
      '60': 'sixty',
      '70': 'seventy',
      '80': 'eighty',
      '90': 'ninety',
    };
    var numStr = `${num}`;
    return nums[numStr]
      ? nums[numStr]
      : nameThatNumber(numStr[0]+'0')+' '+nameThatNumber(numStr[1]);
  }

  it("1", function(){
    assert.strictEqual(nameThatNumber(1), 'one');
  });
  it("52", function(){
    assert.strictEqual(nameThatNumber(52), 'fifty two');
  });
  it("21", function(){
    assert.strictEqual(nameThatNumber(21), 'twenty one');
  });
  it("99", function(){
    assert.strictEqual(nameThatNumber(99), 'ninety nine');
  });
  it("0", function(){
    assert.strictEqual(nameThatNumber(0), 'zero');
  });
  it("53", function(){
    assert.strictEqual(nameThatNumber(53), 'fifty three');
  });
  it("23", function(){
    assert.strictEqual(nameThatNumber(23), 'twenty three');
  });
  it("76", function(){
    assert.strictEqual(nameThatNumber(76), 'seventy six');
  });
  it("20", function(){
    assert.strictEqual(nameThatNumber(20), 'twenty');
  });

});
