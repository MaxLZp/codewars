var assert = require('assert');

describe('Kyu 7: Franks Sticky Calculator ', function () {

  function stickyCalc (operation, val1, val2){
    switch (operation) {
      case '+': return Math.round(+`${Math.round(val1)}${Math.round(val2)}` + Math.round(val2)); break;
      case '-': return Math.round(+`${Math.round(val1)}${Math.round(val2)}` - Math.round(val2)); break;
      case '*': return Math.round(+`${Math.round(val1)}${Math.round(val2)}` * Math.round(val2)); break;
      case '/': return Math.round(+`${Math.round(val1)}${Math.round(val2)}` / Math.round(val2)); break;
      default : return 0;
    }
  }

  it("Basic test", () => {
    assert.equal(stickyCalc('+', 4, 7), 54);
    assert.equal(stickyCalc('-', 15, 10), 1500);
    assert.equal(stickyCalc('*', 5, 5), 275);
    assert.equal(stickyCalc('/', 10, 7), 15);
    
    // Note How numbers are rounded
    assert.equal(stickyCalc('+', 4.2, 7), 54); //Output : (47) + 7 = 54 
    assert.equal(stickyCalc('+', 4.7, 7), 64); //Output : (57) + 7 = 54
    
    // Note that non-integer outputs are rounded
    assert.equal(stickyCalc('/', 10, 7), 15);  //Output : (107) / 7 = 15  Not 15.2857... 
    // Added to prevent flooring result to pass    
    assert.equal(stickyCalc('/', 433, 930), 467); 
  });

});
