var assert = require('assert');

describe('Kyu 7: British vs Slovakian postcodes', function () {

  function whichPostcode(postcode){
    if (/^\s*[a-z]{1,2}\d{1,2} \d[a-z]{2}\s*$/i.test(postcode)) { return "GB"; }
    if (/^\s*\d{3} \d{2}\s*$/.test(postcode)) { return "SK"; }
    return "Not valid";
  }

  it("should return 'GB' for valid British postcode", function() {
    assert.strictEqual(whichPostcode("DN1 1AA"), "GB", "DN1 1AA");
    assert.strictEqual(whichPostcode("D1 1AA"), "GB", "DN1 1AA");
  });
  it("should return 'SK' for valid Slovakian postcode", function() {
    assert.strictEqual(whichPostcode("040 01"), "SK", "040 01");
    assert.strictEqual(whichPostcode("070 08"), "SK", "070 08");
  });
  it("should return 'GB' for valid British postcode with leading or tailing spaces", function() {
    assert.strictEqual(whichPostcode("G4 7Ah  "), "GB", "G4 7Ah  ");
  });
  it("should return 'SK' for valid Slovakian postcode with leading or tailing spaces", function() {
    assert.strictEqual(whichPostcode("  810 08"), "SK", "  810 08");
  });
  it("should return 'Not valid' for invalid British postcode", function() {
    assert.strictEqual(whichPostcode("G4  7AH"), "Not valid", "G4  7AH");
    assert.strictEqual(whichPostcode("12 8NU"), "Not valid", "12 8NU");
    assert.strictEqual(whichPostcode("DN1 AAA"), "Not valid", "DN1 AAA");
    assert.strictEqual(whichPostcode("SE21 AA7"), "Not valid", "SE21 AA7");
    assert.strictEqual(whichPostcode("SE217AA"), "Not valid", "SE217AA");
    assert.strictEqual(whichPostcode("SE1 4AA 3az"), "Not valid", "SE1 4AA 3az");
  });
  it("should return 'Not valid' for invalid Slovakian postcode", function() {
    assert.strictEqual(whichPostcode("810  08"), "Not valid", "810  08");
    assert.strictEqual(whichPostcode("40 01"), "Not valid", "40 01");
    assert.strictEqual(whichPostcode("04001"), "Not valid", "04001");
    assert.strictEqual(whichPostcode("810 081"), "Not valid", "810 081");
  });

});
