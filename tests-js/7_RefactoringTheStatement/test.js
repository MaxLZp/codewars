
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: refactoring the statement', function () {

  function refactoryString (str) {
    return str.replace(/(\d+)/g, code => String.fromCharCode(+code + 97));
  }

  it ("Test", function(){
    assert.strictEqual(refactoryString('str8ng is he17e'),'string is here');
    assert.strictEqual(refactoryString('i li10e pro6ramming'), 'i like programming')
  });

});
