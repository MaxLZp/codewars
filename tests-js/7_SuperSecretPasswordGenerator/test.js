const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Super Secret Password Generator', function () {

//These are your super secret characters you will use to make the password super secure
var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password) {
  var result = password;
  superSecretChars.forEach(replacement => result = result.replace(new RegExp(`${replacement[0]}`, 'gi'), replacement[1]) );

  return result;
}

  it('Tests', () => {
    assert.strictEqual(createSSP("haxorpassword"), "5@*0rp@$$w0rd", "Failed on test \'haxorpassword\' you\'re just asking to be hacked")
    assert.strictEqual(createSSP("HaxorPassword"), "5@*0rP@$$w0rd", "Failed on test \'HaxorPassword\' watch for them upper cases they\'ll getcha")
    assert.strictEqual(createSSP("MuchSecureVeryPassword"), "Muc5$ecureVeryP@$$w0rd", "Failed on test \'MuchSecureVeryPassword\' not success much sadness :(")
    assert.strictEqual(createSSP(""), "", "Failed on test \'\' test them boundary cases dog")
  })

});
