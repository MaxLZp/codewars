const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Work out is it falsy or truthy?', function () {

  it('solution1', function () {

    function falsyOrTruthy(arr) {
      return arr.length % 2 == 0
        ? arr.filter((e) => (e))
        : arr.filter((e) => (!e));
    }

    assert.deepEqual(falsyOrTruthy([false,NaN,NaN,4,5,{}]), [4,5,{}], "should return an array with falsy/truthy values or an empty one");
    assert.deepEqual(falsyOrTruthy([false,NaN,NaN,4,5,1,{}]), [false,NaN,NaN], "should return an array with falsy/truthy values or an empty one");
    assert.deepEqual(falsyOrTruthy([false,NaN]), [], "should return an array with falsy/truthy values or an empty one");
    assert.deepEqual(falsyOrTruthy([1,2,3]), [], "should return an array with falsy/truthy values or an empty one");

  });

});
