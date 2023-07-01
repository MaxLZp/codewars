var assert = require('assert');

describe('Kyu 6: Equal Sides Of An Array', function () {

  function findEvenIndex(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((accumulator, element) => { return accumulator + element; }, 0);
    for (let index = 0; index < arr.length; index++) {
      leftSum += arr[index-1] || 0;
      rightSum -= arr[index];
      if (leftSum === rightSum) { return index; }
    }
    return -1;
  }

  it("Tests", function() {
    assert.equal(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
    assert.equal(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
    assert.equal(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
    assert.equal(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
    assert.equal(findEvenIndex([20,10,-80,10,10,15,35]),0, "The array was: [20,10,-80,10,10,15,35] \n");
  });

});
