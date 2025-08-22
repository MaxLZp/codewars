var assert = require('assert');

describe('Kyu 7: Selection in elementary school', function () {

  function schoolSelection(array) {
    var result = {
      'Kindergarten': 0,
      '1st grade': 0,
      '2nd grade': 0, 
      '3rd grade': 0, 
      '4th grade': 0
    };
    for(var item of array) {
      if (item == 5) { result['Kindergarten']++; }
      else if (item == 6) { result['1st grade']++; }
      else if (item == 7) { result['2nd grade']++; }
      else if (item == 8) { result['3rd grade']++; }
      else if (item == 9) { result['4th grade']++; }
    }

    return result;
  }

  it("Fixed Tests", () => {
    assert.deepEqual(schoolSelection([5, 7, 4, 9, 10, 5, 15, 9, 5]), {
      'Kindergarten': 3,
      '1st grade': 0,
      '2nd grade': 1, 
      '3rd grade': 0, 
      '4th grade': 2
    });
    assert.deepEqual(schoolSelection([5, 5, 5, 6, 6, 60, 6, 666, 9]), {
      'Kindergarten': 3,
      '1st grade': 3,
      '2nd grade': 0, 
      '3rd grade': 0, 
      '4th grade': 1
    });
    assert.deepEqual(schoolSelection([]), {
      'Kindergarten': 0,
      '1st grade': 0,
      '2nd grade': 0, 
      '3rd grade': 0, 
      '4th grade': 0
      });
  });

});
