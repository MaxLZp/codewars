const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Write out expression!', function () {
  const OPERATORS = {
    "+":  "Plus ",
    "-":  "Minus ",
    "*":  "Times ",
    "/":  "Divided By ",
    "**": "To The Power Of ",
    "=":  "Equals ",
    "!=": "Does Not Equal "
  }

  function expressionOut(expr) {
    const NUMS = {
      '1': 'One',
      '2': 'Two',
      '3': 'Three',
      '4': 'Four',
      '5': 'Five',
      '6': 'Six',
      '7': 'Seven',
      '8': 'Eight',
      '9': 'Nine',
      '10': 'Ten',
    }
    const op = expr.match(/(\d+)\s+(.+)\s+(\d+)/);
    return OPERATORS.hasOwnProperty(op[2]) ? `${NUMS[op[1]]} ${OPERATORS[op[2]]}${NUMS[op[3]]}` : "That's not an operator!";
  }

  it('solution1', function () {

    assert.equal(expressionOut("1 + 3"), "One Plus Three");
    assert.equal(expressionOut("2 - 10"), "Two Minus Ten");
    assert.equal(expressionOut("6 ** 9"), "Six To The Power Of Nine");
    assert.equal(expressionOut("5 = 5"), "Five Equals Five");
    assert.equal(expressionOut("7 * 4"), "Seven Times Four");
    assert.equal(expressionOut("2 / 2"), "Two Divided By Two");
    assert.equal(expressionOut("8 != 5"), "Eight Does Not Equal Five");

  });

});
