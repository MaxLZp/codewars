const { assert } = require("chai");

describe('Kyu 7: Likes Vs Dislikes', function () {
  var Like = 1;
  var Nothing = 0;
  var Dislike = -1;

  function likeOrDislike(buttons) {
     return buttons.reduce((state, btn) => ( state === btn ? Nothing : btn), Nothing);
  }

  it("description example tests",() => {
    assert.strictEqual( likeOrDislike([Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([Like,Like]), Nothing );
    assert.strictEqual( likeOrDislike([Dislike,Like]), Like );
    assert.strictEqual( likeOrDislike([Like,Dislike,Dislike]), Nothing );
  });
  it("more example tests",() => {
    assert.strictEqual( likeOrDislike([Dislike,Dislike]), Nothing );
    assert.strictEqual( likeOrDislike([Like,Like,Like]), Like );
    assert.strictEqual( likeOrDislike([Like,Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([Dislike,Like,Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([Like,Like,Dislike,Like,Like,Like,Like,Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([]), Nothing );
  });

});
