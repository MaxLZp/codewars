var assert = require('assert');

describe('Kyu 8: Counting sheeps...', function () {
  it('solution1', function () {

    var array1 = [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true ];

    assert.equal(countSheeps(array1), 17, "There are 17 sheeps in total")

    function countSheeps(arrayOfSheep) {
      return arrayOfSheep.filter(el => el === true).length;
      // or
      // return arrayOfSheep.filter((el) => { return el === true; }).length;
    }
  });

    it('solution other', function () {

    var array1 = [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true ];

    assert.equal(countSheeps(array1), 17, "There are 17 sheeps in total")

    function countSheeps(arrayOfSheep) {
      return arrayOfSheep.filter(Boolean).length;
    }

  });
});
