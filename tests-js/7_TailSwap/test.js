const { assert, config } = require("chai");
config.truncateThreshold = 0;

function tailSwap(arr) {
  arr = arr.map((el) => { return el.split(':')});
  return [
    `${arr[0][0]}:${arr[1][1]}`,
    `${arr[1][0]}:${arr[0][1]}`
  ];
}

describe("Tail Swap", () => {
  it("Basic Tests", () => {
    doTest(['abc:123', 'cde:456'], ['abc:456', 'cde:123']);
    doTest(['a:12345', '777:xyz'], ['a:xyz', '777:12345']);
  });
});

function doTest(arr, exp) {
  const msg = "Test failed for " + JSON.stringify(arr);
  assert.deepEqual(tailSwap(arr), exp, msg);
}
