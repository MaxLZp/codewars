const chai = require('chai');
chai.config.truncateThreshold = 0;
const deepEqual = chai.assert.deepEqual;

describe('Kyu 7: Inverting a Hash', function () {

  function invertHash(hash) {
    return Object.fromEntries(
      Object.entries(hash).map((e) => { return [e[1], e[0]]; })
    );
  }

  function doTest (input, expected) {
    const actual = invertHash(input);
    deepEqual(actual, expected, `for ${JSON.stringify(input)}`);
  }

  it("Fixed Tests", () => {	doTest({ a: '1' }, { 1: 'a' });
    doTest({ a: '1', b: '2', c: '3' },
        { 1: 'a', 2: 'b', 3: 'c' }
    );
    doTest({ 1: '3' }, { 3: '1' });
    doTest({ hello: 'world', foo: 'bar' },
        { world: 'hello', bar: 'foo' }
    );
});

});
