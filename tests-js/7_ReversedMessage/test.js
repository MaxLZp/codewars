var assert = require('assert');

describe('Kyu 7: Reversed Message', function () {

  function reverseMessage(str) {
    return str.toLowerCase().split('').reverse().join('').replace(/(^| )[a-z]/g, c => c.toUpperCase());
  }
  // function reverseMessage(str) {
  //   return str ? str.toLowerCase().split(' ').reverse().map(e => {
  //     var r = e.split('').reverse().join('');
  //     r = r[0].toUpperCase() + r.slice(1);
  //     return r;
  //   }).join(' ') : '';
  // }

  it("Sample tests", function() {
    assert.strictEqual(reverseMessage('AaaaA'),'Aaaaa');
    assert.strictEqual(reverseMessage('Hello there'),'Ereht Olleh');
    assert.strictEqual(reverseMessage('Pl34k78j'), 'J87k43lp');
    assert.strictEqual(reverseMessage('Reverse this message!'),'!egassem Siht Esrever');
    assert.strictEqual(reverseMessage('Today is the 14th of January!'),'!yraunaj Fo Ht41 Eht Si Yadot');
    assert.strictEqual(reverseMessage('hty56hA T76#Td'),'Dt#67t Ah65yth');
    assert.strictEqual(reverseMessage(''),'');
  });

});

