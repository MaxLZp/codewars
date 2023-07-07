var assert = require('assert');

describe('Kyu 7: Minimum Perimeter of a Rectangle', function () {

  it('solution1', function () {

    function dotest(n, expected) {
      assert.deepEqual(minimumPerimeter(n), expected, `Test failed with area = ${n}`)
    }

    dotest(45, 28);
    dotest(30, 22);
    dotest(81, 36);
    dotest(89, 180);

    // Fail with big random tests due to timeout
    function minimumPerimeter(area) {
      let min = area*area;
      for (let index = 1; index <= area/2; index++) {
        if (area % index != 0) {continue;}
        let p = 2 * (index + area/index);
        min = p < min ? p : min;
      }
      return min;
    }
  });

  it('solution2', function () {

    function dotest(n, expected) {
      assert.deepEqual(minimumPerimeter(n), expected, `Test failed with area = ${n}`)
    }

    dotest(45, 28);
    dotest(30, 22);
    dotest(81, 36);
    dotest(89, 180);

    function minimumPerimeter(area) {
      let min = area*area;
      let index = 1;
      do {
          if (area % index != 0) {
            continue;
          }
          let p = 2 * (index + area/index);
          min = p < min ? p : min;
      } while (index < area/index++);
      return min;
    }

  });


});
