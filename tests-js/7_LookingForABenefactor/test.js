const {assert, expect} = require('chai')

function testing(arr, newavg, expected) {
  assert.strictEqual(newAvg(arr, newavg), expected)
}

function newAvg(arr, newavg) {
    var result = Math.ceil(newavg * (arr.length + 1) - arr.reduce((carry, el) => (carry + el), 0));
    if (result <= 0) { throw "Expected New Average is too low"; }
    return result;
}

describe('Kyu 7: Looking for a benefactor', function () {

  it('Basic tests', function () {


    testing([14, 30, 5, 7, 9, 11, 16], 90, 628);
    testing([14, 30, 5, 7, 9, 11, 15], 92, 645);
    expect(function(){ newAvg([14, 30, 5, 7, 9, 11, 15], 2); }).to.throw("Expected New Average is too low");
  });
});
