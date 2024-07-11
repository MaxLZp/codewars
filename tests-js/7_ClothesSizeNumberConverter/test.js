const {assert} = require("chai");

describe('Kyu 7: Clothes size number converter', function () {

  function sizeToNumber(size) {
    var map = {
      's': 36,
      'm': 38,
      'l': 40,
    };

    var matches = size.match(/^(x*)(s|m|l){1}$/);
    if (
      !matches
      ||
      (matches[2] == 'm' && matches[1].length)
    ) { return null; }

    return map[matches[2]] == map['s']
      ? map[matches[2]] - 2 * (matches[1].length || 0)
      : map[matches[2]] + 2 * (matches[1].length || 0);
  }

  it("Basic tests", function() {
    assert.strictEqual(sizeToNumber("s"), 36, "Small size");
    assert.strictEqual(sizeToNumber("m"), 38, "Medium size");
    assert.strictEqual(sizeToNumber("l"), 40, "Large size");
    assert.strictEqual(sizeToNumber("xl"), 42, "Extra large");
    assert.strictEqual(sizeToNumber("xs"), 34, "Extra small")
  });

  it("Extra modifier tests", function() {
    assert.strictEqual(sizeToNumber("xxxs"), 30, "4-extra small");
    assert.strictEqual(sizeToNumber("xxxl"), 46, "4-extra large");
  });

  it("Invalid/wrong sizes/input", function() {
    assert.isNull(sizeToNumber(""), "Blank string is invalid");
    assert.isNull(sizeToNumber("xm"), "Cannot apply modifier for medium size (xm)");
    assert.isNull(sizeToNumber("xxxm"), "Cannot apply modifier for medium size (xxxm)");
    assert.isNull(sizeToNumber("xxxx"), "No base size provided (xxxx)");
    assert.isNull(sizeToNumber("ssss"), "Only one base size is allowed ('ssss')");
    assert.isNull(sizeToNumber("hello world"), "Any other text is invalid ('hello world')");
    assert.isNull(sizeToNumber("sm"), "Cannot have two bases ('sm')");
    assert.isNull(sizeToNumber("ml"), "Cannot have two bases ('ml')");
    assert.isNull(sizeToNumber("lm"), "Cannot have two bases ('lm')");
  });

});
