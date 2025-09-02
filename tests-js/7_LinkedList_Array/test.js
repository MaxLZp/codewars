var assert = require('assert');

describe('Kyu 7: LinkedList -> Array', function () {
  it("should push", function() {
    
    function listToArray(list) {
      var result = [];
      var iterator = list;
      do {
        result.push(iterator.value);
        iterator = iterator.next;
      } while(iterator)

      return result;
    }

    var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
    var list2 = {value: "foo", next: {value: "bar", next: null}};

    assert.deepEqual(listToArray(list1), [1, 2, 3]);
    assert.deepEqual(listToArray(list2), ["foo", "bar"]);
    
  });

});
