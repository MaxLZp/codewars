var assert = require('assert');

describe('Kyu 7: Making Copies', function () {
  function copyList(l){
    return [...l];
  }

  it("test", () => {
    t = [1,2,3,4];
    tCopy = copyList(t);

    assert.deepEqual(t, tCopy, "Copy unsuccessful");
    t[1] += 5;
    assert.notDeepEqual(t, tCopy, "The array was not properly copied");
    });

});
