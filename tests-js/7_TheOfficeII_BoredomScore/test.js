var assert = require('chai').assert;

describe('Kyu 7: The Office II - Boredom Score', function () {

  function boredom(staff){
    var boredom = {
      'accounts': 1,
      'finance': 2,
      'canteen': 10,
      'regulation': 3,
      'trading': 6,
      'change': 6,
      'IS': 8,
      'retail': 5,
      'cleaning': 4,
      'pissing about': 25,
    };
    var score = Object.getOwnPropertyNames(staff).reduce((carry, name) => (carry + boredom[staff[name]]), 0);
    if (score <= 80) { return 'kill me now'; }
    if (score >= 100) { return 'party time!!'; }
    return 'i can handle this'
  }

  it('solution1', function () {
    assert.equal(boredom({tim: 'change', jim: 'accounts',
      randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
      laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
      mr: 'finance' }), 'kill me now');
    assert.equal(boredom({ tim: 'IS', jim: 'finance',
      randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
      katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
      alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
    assert.equal(boredom({ tim: 'accounts', jim: 'accounts',
      randy: 'pissing about', sandy: 'finance', andy: 'change',
      katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
      john: 'retail', mr: 'pissing about' }), 'party time!!');
 });

});
