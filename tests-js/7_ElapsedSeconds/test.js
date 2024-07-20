const strictEqual = require('chai').assert.strictEqual;

describe('Kyu 7: Elapsed Seconds', function () {



  it('solution1', function () {

    function elapsedSeconds(startDate, endDate){
      return (endDate - startDate) / 1000;
      /*
      // These will do the job too:
      return (endDate.getTime() - startDate.getTime()) / 1000;
      return (endDate.getValue() - startDate.getValue()) / 1000;
      */
    }

    function doTest (startDate, endDate, expected) {
      const actual = elapsedSeconds(startDate, endDate, expected);
      strictEqual(actual, expected, `for\n ${startDate} \nand\n ${endDate}`);
    }

    const start = new Date(2013, 1, 1, 0, 0, 1);
    const end = new Date(2013, 1, 1, 0, 0, 2);
    const end2 = new Date(2013, 1, 1, 0, 0, 20);
    const end3 = new Date(2013, 1, 1, 0, 1, 20);

		doTest(start, end, 1);
		doTest(end, end2, 18);
		doTest(start, end2, 19);
		doTest(start, end3, 79);
		doTest(end, end3, 78);

  });

});
