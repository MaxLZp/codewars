var { assert } = require('chai');

describe('Kyu 7: Binary Zoo', function () {

  function countTheAnimals(animals) {
    return Object.values(animals).reduce((c, el) => c + parseInt(el, 2), 0);
  }
  // function countTheAnimals(animals) {
  //   let sum = 0;
  //   for (const animal in animals) {
  //       sum += parseInt(animals[animal], 2);
  //   }

  //   return sum;
  // }

  var results1 = countTheAnimals({aardvark: '1101', tiger: '1100', donkey: '1100', emu: '1010'});

  it("Should return something that isn't falsy", function() {
    assert.equal(results1, 47);
  });

});
