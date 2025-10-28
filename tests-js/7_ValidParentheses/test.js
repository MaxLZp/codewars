const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Valid Parentheses', function () {

  function validParentheses(parenStr) {
    return parenStr.split('').reduce((c, e) => {
      if (c.at(-1) == '(' && e == ')') {
        c.pop();
      } else {
        c.push(e);
      }
      return c;
    }, []).length == 0;
  }

  function runTest(expected, input) {
    assert.strictEqual(validParentheses(input), expected, `Test failed for input: "${input}"`);
  };

  it("Should return true for valid parentheses", function() {
    runTest(true, "()");
    runTest(true, "((()))");
    runTest(true, "()()()");
    runTest(true, "(()())()");
    runTest(true, "()(())((()))(())()");
  });
  
  it("Should return false for invalid parentheses", function() {
    runTest(false, ")(");
    runTest(false, "()()(");
    runTest(false, "((())");
    runTest(false, "())(()");
    runTest(false, ")()");
    runTest(false, ")");
  });
  
  it("Should return true for empty strings", function() {
    runTest(true, "");
  });

});
