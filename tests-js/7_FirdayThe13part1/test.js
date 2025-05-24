var assert = require('assert');

describe('Kyu 7: Friday the 13th Part 1', function () {

  function killcount(counselors, jason){
    return counselors.filter(e => e[1] < jason).map(e => e[0]);
  }

  // function killcount(counselors, jason){
  //   var result = [];
  //   for (const item of counselors) {
  //     if (item[1] < jason) {
  //       result.push(item[0]);
  //     }
  //   }
  //   return result;
  // }

  it("Basic test", () => {
    var counselors = [["Mike", 7],["Alysa", 3]]
    assert.deepEqual(killcount(counselors, 7), ["Alysa"])
  });

});
