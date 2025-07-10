const {assert} = require("chai");

describe('Kyu 7: Coding 3min: Bug in Apple', function () {

  function sc(apple){
    for (let i = 0; i < apple.length; i++) {
      var bIdx = apple[i].indexOf('B');
      if (bIdx >= 0) {
        return [i, bIdx];
      }
    }

    return [0,0];
  }

  it("test", () => {
    let apple=[
    ["B","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],answer=[0,0];
    assert.deepEqual(sc(apple), answer, "good luck!");  

    apple=[
    ["A","A","A","A","A"],
    ["A","B","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],answer=[1,1];
    assert.deepEqual(sc(apple), answer, "good luck!"); 

    apple=[
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","B","A","A","A"]
    ],answer=[4,1];
    assert.deepEqual(sc(apple), answer, "good luck!"); 

  });

});
