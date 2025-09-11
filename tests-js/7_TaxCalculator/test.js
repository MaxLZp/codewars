const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe('taxCalculator', function(){
  
  function taxCalculator(total) {
    if (isNaN(total) || total < 0) { return 0; }
    
    var tax =  0.1*(Math.min(10, total));
    if (total > 10) { tax += 0.07*(Math.min(10, total-10)); }
    if (total > 20) { tax += 0.05*(Math.min(10, total-20)); }
    if (total > 30) { tax += 0.03*(total-30); }
    
    return Math.round(100*tax)/100;
  }

	it('should tax 10% on the first 10$', function() {
    assert.equal(taxCalculator(1), 0.1, "Incorrect Value for '1'");
  });

	it('should tax 10% on the first 10$', function() {
    assert.equal(taxCalculator(10), 1, "Incorrect Value for '10'");
  });
	it('should tax 7% on the second 10$', function() {
    assert.equal(taxCalculator(11), 1.07, "Incorrect Value for '10'");
  });

  it('should tax 7% for $10 to $20', function() {
    assert.equal(taxCalculator(15), 1.35, "Incorrect Value for '15'");
  });

  it('should tax 5% for $20 to $30', function() {
    assert.equal(taxCalculator(25), 1.95, "Incorrect Value for '25'");
  });

  it('should tax 3% on everything in excess of $30', function() {
    assert.equal(taxCalculator(35), 2.35, "Incorrect Value for '35'");
  });

});
