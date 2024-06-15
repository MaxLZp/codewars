const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Convert Hash To An Array', function () {

  function convertHashToArray(hash){
    return Object.getOwnPropertyNames(hash).map((prop) => ([prop, hash[prop]]));
  }

  it('solution', function () {

    assert.sameDeepMembers(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);
    assert.sameDeepMembers(convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]);
    assert.sameDeepMembers(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
    assert.sameDeepMembers(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]);
    assert.sameDeepMembers(convertHashToArray({}),[]);

  });

});

describe('Kyu 7: Convert Hash To An Array. Solution 2', function () {

  function convertHashToArray(hash){
    return Object.entries(hash);
  }

  it('solution', function () {

    assert.sameDeepMembers(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);
    assert.sameDeepMembers(convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]);
    assert.sameDeepMembers(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
    assert.sameDeepMembers(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]);
    assert.sameDeepMembers(convertHashToArray({}),[]);

  });

});
