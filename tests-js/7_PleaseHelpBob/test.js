var assert = require('assert');

describe('Kyu 7: Please help Bob', function () {

  function errBob(string){
    // my
    return string.replace(/(\w+)/g, (e) => e.replace(/([bcdfghjklmnpqrstvwxyz])$/, "$1err").replace(/([BCDFGHJKLMNPQRSTVWXYZ])$/, "$1ERR"));

    //other
    // return string
    //   .replace(/([bcdfghjklmnpqrstvwxyz])(\W|$)/g, '$1err$2')
    //   .replace(/([BCDFGHJKLMNPQRSTVWXYZ])(\W|$)/g, '$1ERR$2');
  }

  it(`Test`, function() {
    assert.equal(errBob("Hello, I am Mr Bob"),"Hello, I amerr Mrerr Boberr")
    assert.equal(errBob("THIS, is crazy!"), "THISERR, iserr crazyerr!")
    assert.equal(errBob("r r r r r r r r"), "rerr rerr rerr rerr rerr rerr rerr rerr")
    assert.equal(errBob("hI, hi. hI hi skY! sky? skY sky"),"hI, hi. hI hi skYERR! skyerr? skYERR skyerr")
    assert.equal(errBob("This, is. another! test? case to check your beautiful code."),"Thiserr, iserr. anothererr! testerr? case to checkerr yourerr beautifulerr code.")
  });

});
