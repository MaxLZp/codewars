const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Wheres my Elements at?', function () {

  const elementLocation = (begin, end, index, size) => {
    if (index < 0
      // ||
      // end - begin < size
      // ||
      // end < begin + index*size
      ||
      end < begin + index*size + size
    ) {
      throw Error('Invalid data');
    }

    return begin + index * size;
  }

  it("should handle sample test cases", function() {
    assert.strictEqual(elementLocation(0x1000, 0x1040, 0x3, 0x8), 0x1018);
    assert.strictEqual(elementLocation(0x2000, 0x2100, 0x3, 0x4), 0x200C);
    assert.strictEqual(elementLocation(0x2000, 0x2100, 0x0, 0x4), 0x2000);
  });

  it("should throw an error if the memory being accessed is not part of the array", function() {
    assert.throws(() => elementLocation(0x1000, 0x1040, 0x8, 0x8));
    assert.throws(() => elementLocation(0x1000, 0x1040, -1, 0x8));
  });

});
