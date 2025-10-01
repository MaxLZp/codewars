const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: All Star Code Challenge #12', function () {

  function combineFriends(array){
    var result = {};
    for (const friend of array) {
      result[friend['id']] = friend;
      delete friend['id'];
    }

    return result;
  }

  it("containAllRots",function() {
    var Friend=(function(){
      //utilizing closure
      var id = 0;
      return function Friend(obj){
        //will give unique ID to each object
        this.id = id++;
        for (var i in obj){
          this[i]=obj[i];
        }
      }
    })();
    
    var checkForId = function(obj){
      //Just checks if each Friend object in combineFriends() output does NOT have an "id"
      for (i in obj){
        if (obj[i].id){
          return false
        }
      }
      return true
    }
    
    var first = new Friend({name: "dave"});
    var second = new Friend({blah: false});
    var third = new Friend({this: "is", just: "a test"});
    var inputArray = [first, second, third];
    var allFriends = combineFriends(inputArray);
    
    assert.equal(allFriends["0"]["name"], "dave", "Did not properly assign the other key:values");
    assert.equal(Object.keys(allFriends).length, inputArray.length, "ouput was not of correct length");
    assert.equal(allFriends["0"].id, undefined);
    assert.isTrue(checkForId(allFriends),"friend objects should not containd an 'id' key");
  })

});
