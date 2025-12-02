const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: What is type of variable?', function () {

  function type(value) {
    if (value === undefined) { return 'undefined'; }
    if (value === null) { return 'null'; }
    if (value instanceof Array) { return 'array'; }
    if (value instanceof String) { return 'string'; }
    if (value instanceof Date) { return 'date'; }
    return typeof value;
  }
  
  it('solution1', function () {
    assert.equal(type([]), 'array');
    assert.equal(type({}), 'object');
    assert.equal(type(''), 'string');
    assert.equal(type([].join()), 'string');
    assert.equal(type(new Date()), 'date');  
    var a;  
    assert.equal(type(a), 'undefined');    
    assert.equal(type(null), 'null');    
  });

});
