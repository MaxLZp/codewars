const {assert,config} = require("chai");
config.truncateThreshold = 0;

describe('Kyu 7: Clean Nesting Tree', function () {

  function isCleanlyNested(xs) {
    return (xs.every(e => 0 == e.length) || xs.every(e => e.length > 0)) && xs.every(e => isCleanlyNested(e));
    // return xs.some(e => 0 == e.length) && xs.some(e => e.length > 0)
    //   ? false
    //   : xs.every(e => isCleanlyNested(e));
  }

  it("Basic tests", function() {

    function test(xs,expected) {
      const message = `isCleanlyNested(${ JSON.stringify(xs) })`;
      const actual = isCleanlyNested( structuredClone(xs) );
      assert.strictEqual(actual,expected,message);
    }

    for ( const [xs,expected] of [[ [ [ [ [] ], [ [] ], [ [] ] ], [ [] ], [ [] ] ], true ]
      , [ [], true ]
      , [ [ [], [] ], true ]
      , [ [ [ [], [], [] ], [ [], [ [] ] ] ], false ]
      , [ [ [ [ [ [] ], [ [] ] ], [ [] ] ], [ [] ] ], true ]
      , [ [ [ [ [ [] ], [ [] ], [] ], [ [] ] ], [ [] ] ], false ]
      , [ [ [ [ [ [ [], [], [], [] ], [ [ [ [] ], [ [] ], [ [] ] ] ] ], [ [], [], [], [], [], [] ] ] ], [ [], [], [], [] ] ], true ]
      , [ [ [ [], [], [], [], [] ] ], true ]
      , [ [ [ [ [], [], [] ], [ [], [], [] ], [ [], [], [] ], [ [], [], [], [], [], [] ] ] ], true ]
      , [ [ [], [ [], [ [], [ [], [], [], [] ], [ [ [], [], [], [] ], [], [], [ [], [], [], [], [], [] ] ], [] ], [] ], [], [], [], [] ], false ]
      , [ [ [], [ [], [], [] ], [] ], false ]
      , [ [ [], [], [ [], [ [], [], [], [] ], [], [] ], [], [], [] ], false ]
      ] ) test(xs,expected);
  });

});
