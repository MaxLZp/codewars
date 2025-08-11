var assert = require('assert');

describe('Kyu 7: Mobile operator detector', function () {

  function detectOperator(a){
    var operators = {
      "039": "Golden Telecom",
      "050": "MTS",
      "063": "Life:)",
      "066": "MTS",
      "067": "Kyivstar",
      "068": "Beeline",
      "093": "Life:)",
      "095": "MTS",
      "096": "Kyivstar",
      "097": "Kyivstar",
      "098": "Kyivstar",
      "099": "MTS"
    };
    var match = `${a}`.match(/^8(\d{3})\d{7}$/);

    return (match && operators[match[1]]) ? operators[match[1]] : "no info";
  }

  it("Should work for test cases", function(){
    assert.equal(detectOperator(80931551119),"Life:)");
    assert.equal(detectOperator(8011155117711),"no info");    
  })
});
