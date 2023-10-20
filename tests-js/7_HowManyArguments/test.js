var assert = require('assert');

describe('Kyu 7: How many arguments', function () {

  function args_count() {
    return arguments.length;
  }

  it("Fixed Tests", () => {
    assert.strictEqual(args_count(1, 2), 2);
    assert.strictEqual(args_count(), 0);
    assert.strictEqual(args_count('A', 'B', 'C'), 3);
    assert.strictEqual(args_count(["foo", "bar"]), 1);
  });

});
