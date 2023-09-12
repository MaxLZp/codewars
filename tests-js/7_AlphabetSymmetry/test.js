var assert = require('assert');

describe('Kyu 7: Alphabet symmetry', function () {

  it('solution1', function () {
    function solve(arr){
      return arr.map((value) => {
        let counter = 0;
        for (let index = 0; index < value.length; index++) {
          if (value.toLowerCase().charCodeAt(index) == 'a'.charCodeAt(0) + index) { counter++; }
        }
        return counter;
      });
    };

    assert.deepEqual(solve(["abode","ABc","xyzD"]),[4,3,1]);
    assert.deepEqual(solve(["abide","ABc","xyz"]),[4,3,0]);
    assert.deepEqual(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
    assert.deepEqual(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);
  });

  it('solution2', function () {
    function solve(arr){
      return arr.map((value) => {
        return [...value.toLowerCase()].reduce((accumulator, cur, index) => {
          return accumulator + (cur.charCodeAt(0) == 'a'.charCodeAt(0)+index ? 1 : 0);
        }, 0);
      });
    };

    assert.deepEqual(solve(["abode","ABc","xyzD"]),[4,3,1]);
    assert.deepEqual(solve(["abide","ABc","xyz"]),[4,3,0]);
    assert.deepEqual(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
    assert.deepEqual(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);
  });

});
