var chai = require('chai');
var assert = chai.assert;

describe('Kyu 7: Create 10x10 array and randomly fill each cell with "A", "B", "C", or "D"', function () {
  
  function array10(){
    var letters = ['A', 'B', 'C', 'D']
    var result = [];
    for(var i = 0; i < 10; i++) {
      result[i] = [];
      for (var j = 0; j < 4; j++) {
        result[i].push(letters[(i+j) % 4]);
      }
      for(var j = 0; j < 6; j++) {
        result[i].push(letters[Math.round(10 * Math.random()) % 4]);
      }
    }

    return result;
  }

  let res = array10();
  for(let key in res) {
    if (isNaN(key)) {continue;}
    describe(`Row ${key}`, () => {
      it(`Checking the length of row ${key}`, () => {
        assert.strictEqual(res[key].length, 10, `array10() row ${key} length must be 10`);
      })
      it("Checking whether all the letters are present in rows of array", () => {
        assert.includeMembers(res[key], ['A', 'B', 'C', 'D'], `array10() row ${key} must contain the letter at least once`);
      });
    });
  }
});
