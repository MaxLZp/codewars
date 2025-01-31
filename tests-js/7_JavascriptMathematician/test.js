const { assert } = require('chai');

describe('Kyu 7: Javascript Mathematician', function () {

  // function calculate() {
  //   const sum = [...arguments].reduce((c, e) => c + e);
  //   return function () {
  //     return sum + [...arguments].reduce((c,e) => c + e);
  //   }
  // }

  function calculate(...args1) {
    return function (...args2) {
      return [...args1, ...args2].reduce((c,e) => c + e);
    }
  }

  it ("should be a correct number from example Test Case", function(){
    do_test([1], [1], 2);
    do_test([1, 1], [1], 3);
    do_test([1, 1], [1, -1], 2);
    do_test([2, 4], [3, 7, 1], 17);
  });

  function do_test(arr1, arr2, reference) {
    const msg = `calculate(${arr1.join()})(${arr2.join()})`;
    const intermediate = calculate(...arr1);
    assert.isFunction(intermediate, `${msg}\nYour solution cannot handle more than one set of arguments`)
    const user = intermediate(...arr2);
  }

});
