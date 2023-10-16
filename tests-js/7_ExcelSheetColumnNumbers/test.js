var assert = require('assert');

describe('Kyu 7: Excel sheet column numbers', function () {

  function titleToNumber(title) {
    const aCode = 'A'.charCodeAt(0) - 1;
    let result = 0;
    for (let index = 0; index < title.length; index++) {
      const num = title[index].charCodeAt(0) - aCode;
      result += num * Math.pow(26, title.length - index - 1);
    }
    return result;
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
