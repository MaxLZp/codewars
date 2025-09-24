const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Game Hit the target', function () {
    
  const solution = mtrx => mtrx.some(line => {
    var arrow = line.indexOf('>');
    var target = line.indexOf('x');
    return arrow >= 0 && target >=0 && arrow < target;
    // or others
    // Array will be converted to string when regexp being run on the array
    // Array will be joined using commas. E.g. ['>','q','w','x'] => '>,q,w,x'
    return />.*x/.test(line); 
  });
  

  it("", function() {
    assert.deepEqual(solution([
      ['>', ' '],
      [' ', 'x']
    ]), false);
  });
  
  it("", function() {
    assert.deepEqual(solution([
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', '>', ' ', 'x'],
      [' ', ' ', '', ' ', ' ']
    ]), true);
  });

});
