const assert = require("assert");

describe('Kyu 7: Basic Math (Add or Subtract)', function () {

  function calculate(str) {
    var p = str.match(/(\d+|plus|minus)/g);
    var sum = +p[0] || 0;
    for (let index = 1; index < p.length; index += 2) {
      sum += p[index] == 'plus' ? +p[index+1] : -1*p[index+1];
    }
    return `${sum}`;
  }

  it("BasicTests", () => {
    assert.equal(calculate('1plus2plus3plus4'), '10')
    assert.equal(calculate('1minus2minus3minus4'), '-8')
    assert.equal(calculate('1plus2plus3minus4'), '2')
  });


});
describe('Kyu 7: Basic Math (Add or Subtract)  -- version 2', function () {

  function calculate(str) {
    return `${eval(str.replaceAll(/(plus)/g, '+').replaceAll(/(minus)/g, '-'))}`;
  }

  it("BasicTests", () => {
    assert.equal(calculate('1plus2plus3plus4'), '10')
    assert.equal(calculate('1minus2minus3minus4'), '-8')
    assert.equal(calculate('1plus2plus3minus4'), '2')
  });

});
