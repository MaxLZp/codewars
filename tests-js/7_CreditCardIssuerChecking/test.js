var assert = require('assert');

describe('Kyu 7: Credit card issuer checking', function () {

  it('solution1', function () {

    function getIssuer(number) {
      number = `${number}`;
      if (/^3[47]\d{13}/.test(number)) { return 'AMEX'; }
      if (/^6011\d{12}/.test(number)) { return 'Discover'; }
      if (/^5[1-5]\d{14}/.test(number)) { return 'Mastercard'; }
      if (/^4(\d{12}|\d{15})/.test(number)) { return 'VISA'; }
      return 'Unknown';
    }

    assert.equal(getIssuer(4111111111111111), 'VISA');
    assert.equal(getIssuer(378282246310005), 'AMEX');
    assert.equal(getIssuer(9111111111111111), 'Unknown');

  });

});
