var assert = require('assert');

describe('Kyu 7: Training JS #37: Unlock new weapon---RegExp Object', function () {

  function countAnimals(animals, count){
    return count.map((v) => (animals.match(new RegExp(v, 'g')) || []).length);
  }

  it("First triangle area", function() {
    assert.deepEqual(countAnimals("dog,cat",["dog","cat"]) , [1,1]);
    assert.deepEqual(countAnimals("dog,cat",["dog","cat","pig"]) , [1,1,0]);
    assert.deepEqual(countAnimals("dog,dog,cat",["dog","cat"]) , [2,1]);
    assert.deepEqual(countAnimals("dog,dog,cat",["pig","cow"]) , [0,0]);
  });

});
