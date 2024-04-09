var assert = require('assert');

describe('Kyu 7: Method For Counting Total Occurence Of Specific Digits', function () {

  it("Solution 1", function() {
    function List(){
      this.countSpecDigits=function(integersList, digitsList){
        var map = new Map(digitsList.map((v) => ([v, 0])));
        integersList.forEach(integer => {
          `${integer}`.split('').forEach((element) => {
            if (map.has(+element)) {
               map.set(+element, map.get(+element) + 1);
            };
          });

        });
        return Array.from(map, ([name, value]) => ([name, value]));
      }
    }

    var l = new List();

    integersList =  [1, 1, 2, 3, 1, 2, 3, 4];
    digitsList = [1, 3];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList),[[1, 3], [3, 2]]);

    integersList = [-18, -31, 81, -19, 111, -888];
    digitsList = [1, 8, 4];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList), [[1, 7], [8, 5], [4, 0]]);

    integersList = [-77, -65, 56, -79, 6666, 222];
    digitsList = [1, 8, 4];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList),  [[1, 0], [8, 0], [4, 0]]);

    integersList = [-77, -65, 56, -79, 6666, 222];
    digitsList = [];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList), []);

    integersList = [];
    digitsList = [1, 8, 4];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList), [[1, 0], [8, 0], [4, 0]]);
  });

  it("Solution 2", function() {
    function List(){
      this.countSpecDigits=function(integersList, digitsList){
        return digitsList.map((d) => ([d, `${integersList}`.split(d).length - 1]));
      }
    }

    var l = new List();

    integersList =  [1, 1, 2, 3, 1, 2, 3, 4];
    digitsList = [1, 3];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList),[[1, 3], [3, 2]]);

    integersList = [-18, -31, 81, -19, 111, -888];
    digitsList = [1, 8, 4];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList), [[1, 7], [8, 5], [4, 0]]);

    integersList = [-77, -65, 56, -79, 6666, 222];
    digitsList = [1, 8, 4];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList),  [[1, 0], [8, 0], [4, 0]]);

    integersList = [-77, -65, 56, -79, 6666, 222];
    digitsList = [];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList), []);

    integersList = [];
    digitsList = [1, 8, 4];
    assert.deepEqual(l.countSpecDigits(integersList, digitsList), [[1, 0], [8, 0], [4, 0]]);
  });

});
