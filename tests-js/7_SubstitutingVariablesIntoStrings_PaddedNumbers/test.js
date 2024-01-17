var assert = require('assert');

describe('Kyu 7: Substituting Variables Into Strings: Padded Numbers', function () {

  if ('solution1', () => {
    function solution(value){
      return 'Value is '+'0'.repeat(5-(`${value}`.length))+`${value}`;
    }

    it("Testing for fixed tests", () => {
      assert.strictEqual(solution(5),"Value is 00005")
      assert.strictEqual(solution(1204),"Value is 01204")
      assert.strictEqual(solution(109),"Value is 00109")
      assert.strictEqual(solution(0),"Value is 00000")
    })
  });

  if ('solution2', () => {
    function solution(value){
      return 'Value is '+('0'.repeat(5)+`${value}`).slice(-5);
    }

    it("Testing for fixed tests", () => {
      assert.strictEqual(solution(5),"Value is 00005")
      assert.strictEqual(solution(1204),"Value is 01204")
      assert.strictEqual(solution(109),"Value is 00109")
      assert.strictEqual(solution(0),"Value is 00000")
    })
  });

});
