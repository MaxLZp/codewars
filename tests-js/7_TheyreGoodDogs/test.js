var assert = require('assert');

describe("They're good dogs",() => {

  function weRateDogs(str, rating){
    return str.replace(/\d+\/\d+/, `${rating}/10`);
   }

  it('Create a box with specified dimensions', function () {
    assert.equal(
      weRateDogs('This is Tucker. He would like a hug. 3/10 someone hug him', 11), 
      'This is Tucker. He would like a hug. 11/10 someone hug him', 'Should return a string with updated rating'
    );
    assert.equal(
      weRateDogs('This is Charlie. He pouts until he gets to go on the swing. 5/10 manipulative af.', 12),
      "This is Charlie. He pouts until he gets to go on the swing. 12/10 manipulative af.", 'Should return a string with updated rating'
    ); 
  })
});
