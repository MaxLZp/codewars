var assert = require('assert');

describe('Kyu 7: Currency Conversion', function () {

  function convertMyDollars(usd, currency) {
    // use CONVERSION_RATES object
    var CONVERSION_RATES  = {
      'Argentinian Peso': 10,
      'Armenian Dram': 478,
      'Bangladeshi Taka': 1010010,
      'Croatian Kuna': 110,
      'Czech Koruna': 10101,
      'Dominican Peso': 110000,
      'Egyptian Pound': 18,
      'Guatemalan Quetzal': 111,
      'Haitian Gourde': 1000000,
      'Indian Rupee': 63,
      'Japanese Yen': 1101111,
      'Kenyan Shilling': 1100110,
      'Nicaraguan Cordoba': 11111,
      'Norwegian Krone': 1000,
      'Philippine Piso': 110010,
      'Romanian Leu': 100,
      'Samoan Tala': 11,
      'South Korean Won': 10000100011,
      'Thai Baht': 100000,
      'Uzbekistani Som': 10000,
      'Venezuelan Bolivar': 1010,
      'Vietnamese Dong': 101100000101101
    };
    var value = usd * (/^[aeiou]/i.test(currency) ? CONVERSION_RATES[currency] : parseInt(CONVERSION_RATES[currency], 2));
    // or
    // var value = usd * (parseInt(CONVERSION_RATES[currency], /^[aeiou]/i.test(currency) ? 10 : 2 ));

    return `You now have ${value} of ${currency}.`
  }

  it('Tests', () => {
    assert.equal(convertMyDollars(7, "Armenian Dram"), "You now have 3346 of Armenian Dram.");
    assert.equal(convertMyDollars(322, "Armenian Dram"), "You now have 153916 of Armenian Dram.");
    assert.equal(convertMyDollars(25, "Bangladeshi Taka"), "You now have 2050 of Bangladeshi Taka.");
    assert.equal(convertMyDollars(730, "Bangladeshi Taka"), "You now have 59860 of Bangladeshi Taka.");
    assert.equal(convertMyDollars(37, "Croatian Kuna"), "You now have 222 of Croatian Kuna.");
    assert.equal(convertMyDollars(40, "Croatian Kuna"), "You now have 240 of Croatian Kuna.");
    assert.equal(convertMyDollars(197, "Czech Koruna"), "You now have 4137 of Czech Koruna.");
    assert.equal(convertMyDollars(333, "Czech Koruna"), "You now have 6993 of Czech Koruna.");
    assert.equal(convertMyDollars(768, "Dominican Peso"), "You now have 36864 of Dominican Peso.");
    assert.equal(convertMyDollars(983, "Dominican Peso"), "You now have 47184 of Dominican Peso.");
  });

});
