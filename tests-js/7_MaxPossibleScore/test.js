var assert = require('assert');

describe('Kyu 7: maxPossibleScore', function () {

  function maxPossibleScore(obj, arr) {
    var sum = 0;
    for(const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        sum += arr.includes(prop) ? obj[prop] * 2 : obj[prop]
      }
    }

    return sum;
  }

  const test_it = (input, expected, description) => {
    it(description, function(){
      assert.strictEqual(maxPossibleScore(...input), expected, `maxPossibleScore(${JSON.stringify(input[0])}, ${JSON.stringify(input[1])}) should return ${expected}`);
    });
  };

  test_it([{ "a": 1 }, []], 1, "maxPossibleScore({ 'a': 1 }, []) should return 1");
  test_it([{ "a": 1 }, ["a"]], 2, "maxPossibleScore({ 'a': 1 }, ['a']) should return 2");
  test_it([{ "a": 1, "b": 14 }, ["b"]], 29, "maxPossibleScore({ 'a': 1, 'b': 14 }, ['b']) should return 29");
  test_it([{ "a": 1, "b": 2, "c": 4 }, ["a", "b", "c"]], 14, "maxPossibleScore({ 'a': 1, 'b': 2, 'c': 4 }, ['a', 'b', 'c']) should return 14");
  test_it([{ "a": 2, "b": 5, "c": 8 }, ["c"]], 23, "maxPossibleScore({ 'a': 2, 'b': 5, 'c': 8 }, ['c']) should return 23");

});
