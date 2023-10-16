var assert = require('assert');

describe('Kyu 7: Excel sheet column numbers. V2', function () {

  function titleToNumber(title) {
    return title
      .split('')
      .map((e) => { return e.charCodeAt(0) - 'A'.charCodeAt(0) + 1; })
      .reduce((a, e) => { return a*26 + e;  });
  }

  it('Tests', () => {
    assert.equal(titleToNumber('A'),1);
    assert.equal(titleToNumber('Z'),26);
    assert.equal(titleToNumber('AA'),27);
    assert.equal(titleToNumber('AZ'),52);
    assert.equal(titleToNumber('BA'),53);
    assert.equal(titleToNumber('CODEWARS'),28779382963);
  })

});
