var assert = require('assert');

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  var data = new Node(data);
  if (head) { data.next = head; }
  return data;
}

function buildOneTwoThree() {
  var result = new Node(3);
  result = push(result, 2);
  result = push(result, 1);
  return result;
}

describe('Kyu 7: Linked Lists - Push & BuildOneTwoThree', function () {
  it("should push", function() {
    assert.equal(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
    assert.equal(push(null, 1).next, null, "Should be able to create a new linked list with push().");
    assert.equal(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
    assert.equal(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");
  });

  it("should build 1-2-3", function() {
    assert.equal(buildOneTwoThree().data, 1, "First node should should have 1 as data.");
    assert.equal(buildOneTwoThree().next.data, 2, "First node should should have 1 as data.");
    assert.equal(buildOneTwoThree().next.next.data, 3, "Second node should should have 2 as data.");
    assert.equal(buildOneTwoThree().next.next.next, null, "Third node should should have 3 as data.");
  });

});
