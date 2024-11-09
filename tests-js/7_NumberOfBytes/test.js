const chai = require('chai');
chai.config.truncateThreshold = 0;
const { deepEqual } = chai.assert;



describe('Kyu 7: Number to Bytes', function () {

  function toBytes (n) {
    var s = n.toString(2);
    return s.padStart(Math.ceil(s.length / 8) * 8, '0').match(/(.{8})/g);
  }

  function doTest(n, expected) {
    const actual = toBytes(n);
    deepEqual(actual, expected, `for n = ${n}:\n`);
  }

  it("sample tests", function() {
    doTest(0, ['00000000']);
    doTest(1, ['00000001']);
    doTest(257, ['00000001', '00000001']);
    doTest(0x101, ['00000001', '00000001']);
    doTest(0x000000000101, ['00000001', '00000001']);
    doTest(0xffff, ['11111111', '11111111']);
    doTest(0x1020304, ['00000001', '00000010', '00000011', '00000100']);
    doTest(65537, ['00000001', '00000000', '00000001']);
    doTest(Number.MAX_SAFE_INTEGER, ['00011111', '11111111', '11111111', '11111111', '11111111', '11111111', '11111111']);
    doTest(2 ** 24 + 1, ['00000001', '00000000', '00000000', '00000001']);
    doTest(2 ** 31 + 1, ['10000000', '00000000', '00000000', '00000001']);
    doTest(2 ** 32 - 1, ['11111111', '11111111', '11111111', '11111111']);
  });

});
