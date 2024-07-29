var assert = require('assert');

describe('Kyu 7: uniquePush - No Dupes!', function () {

  it('solution1', function () {

    function uniquePush(arr, obj) {
      return obj.hasOwnProperty('phoneNumber')
        &&
        arr.every((el) => (el.phoneNumber !== obj.phoneNumber))
        &&
        !!arr.push(obj);
    }

    var bob = {name:'bob', phoneNumber:1234}
    var joe = {name:'joe', phoneNumber:12345};
    var dupeJoe = {name:'I am duped', phoneNumber:12345};
    var noPhone = {name:'I have no phone'};

    assert.equal(uniquePush([bob], joe), true);
    assert.equal(uniquePush([joe], bob), true);
    assert.equal(uniquePush([bob, joe], dupeJoe), false);
    assert.equal(uniquePush([bob, joe], noPhone), false);

  });

});
