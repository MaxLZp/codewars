const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: A Gift Well Spent', function () {

  var buy = function(x, arr){
    for(var i = 0; i < arr.length - 1; i++) {
      for(var j = i + 1; j < arr.length; j++) {
        if (x == arr[i] + arr[j]) {
          return [i, j];
        }
      }
    }
    return null;
  };

  var randomInt = function(){
    return Math.round(Math.random() * 100);
  }
  var randomArray = function(n){
    var i, r = [];
    for(i = 0; i < n; ++i) r.push(randomInt());
    return r;
  }
  it("should return Nothing on an empty list", function(){
    assert.deepEqual(buy(randomInt(), []), null);
  });
  it("should return Nothing on a short list",function(){
    assert.deepEqual(buy(randomInt(), [randomInt()]), null);
  });
  it("should work for the examples", function(){
    assert.deepEqual(buy(2,[1,1]), [0,1]);
    assert.deepEqual(buy(3,[1,1]), null);
    assert.deepEqual(buy(5,[5,2,3,4,5]), [1,2]);
    assert.deepEqual(buy(5,[1,2,3,4,5]), [0,3]);
    assert.deepEqual(buy(5,[0,0,0,2,3]), [3,4]);
  });  
  it("should return the correct indices if there are any", function(){
    var arr, x, r, i;
    for(i = 0; i < 20; ++i){
      arr = randomArray(randomInt()), x = randomInt(), r = buy(x,arr.concat([]));
      if(r !== null)
        assert.deepEqual(x, arr[r[0]] + arr[r[1]]);
    }
  });

});
