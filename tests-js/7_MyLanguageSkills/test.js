var assert = require('assert');

describe('Kyu 7: My Language Skills', function () {

  /** Other solution */
  function myLanguages(results) {
    return Object.keys(results).filter(key => results[key] >= 60).sort((l,r) => results[r] - results[l]);
  }

  // function myLanguages(results) {
  //   var arr = [];
  //   for (const key in results) {
  //     if (results[key] >= 60) {
  //       arr.push({"language" : key, "score": results[key]});
  //     }
  //   }
  //   arr.sort((l, r) => r["score"] - l["score"]);

  //   return arr.map((el => el["language"]));
  // }

  it("Fixed tests", function(){
    assert.deepEqual(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
    assert.deepEqual(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
    assert.deepEqual(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
  });

});
