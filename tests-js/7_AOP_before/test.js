const strictEqual = require('chai').assert.strictEqual;

describe('Kyu 7: AOP - Before', function () {

  function adviseBefore(target, advice) {
    return function (...args) {
      var adviceResult = advice(...args);
      return target(...adviceResult instanceof Array ? adviceResult : args);
    };
  }

  it('should create a player', function (){
		const doubleArgs   = (...args) => args.map(x => 2 * x);
		const doubleArrayMutate = (array) => array.forEach((_, i) => array[i] *= 2);
		const doubleArrayPure = (array) => array.map(x => 2 * x)

		const sumArgs =  (...args) =>  args.reduce((sum, x) => sum + x, 0);
		const sumArray =     array => array.reduce((sum, x) => sum + x, 0);

		const funcArgs = adviseBefore(sumArgs, doubleArgs);
		strictEqual(funcArgs(2, 5, 8), 30);

		const funcArrayMutate = adviseBefore(sumArray, doubleArrayMutate);
		strictEqual(funcArrayMutate([2, 5, 8]), 30);

		const funcArrayPure = adviseBefore(sumArgs, doubleArrayPure);
		strictEqual(funcArrayPure([2, 5, 8]), 30);
  })

});
