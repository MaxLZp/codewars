const { expect, assert } = require('chai');

describe('Kyu 7: Covfefe', function () {

  function covfefe(str){
    return str.includes('coverage') ? str.replace(/coverage/g, 'covfefe') : `${str} covfefe`;
  }

  it("should return 2 for binary number 10", () => {
    assert.equal(covfefe("coverage"),"covfefe");
    assert.equal(covfefe("coverage coverage"),"covfefe covfefe");
    assert.equal(covfefe("nothing"),"nothing covfefe");
    assert.equal(covfefe("double space "),"double space  covfefe");
    assert.equal(covfefe("covfefe"),"covfefe covfefe");
    assert.equal(covfefe("erag"),"erag covfefe");
  });

});
