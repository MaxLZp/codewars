var assert = require('assert');

describe("String basics",() =>{

  function getUsersIds(str){
    return str
      .toLowerCase()
      .replace(/#+/g, '')
      .split(',')
      .map((e) => (e.replace(/uid(\.*)/, "$1").trim()));
  }

  it('Basic tests', () => {
    assert.deepEqual(getUsersIds("uid12345"), ["12345"]);
    assert.deepEqual(getUsersIds("   uidabc  "), ["abc"]);
    assert.deepEqual(getUsersIds("#uidswagger"), ["swagger"]);
    assert.deepEqual(getUsersIds("uidone, uidtwo"), ["one", "two"]);
    assert.deepEqual(getUsersIds("uidCAPSLOCK"), ["capslock"]);
  })

  it("Advanced tests",() =>{
    assert.deepEqual(getUsersIds("uid##doublehashtag"), ["doublehashtag"]);
    assert.deepEqual(getUsersIds("  uidin name whitespace"), ["in name whitespace"]);
    assert.deepEqual(getUsersIds("uidMultipleuid"), ["multipleuid"]);
    assert.deepEqual(getUsersIds("uid12 ab, uid#, uidMiXeDcHaRs"), ["12 ab", "", "mixedchars"]);
    assert.deepEqual(getUsersIds(" uidT#e#S#t# "), ["test"]);

    assert.deepEqual(
      getUsersIds('uidUID, uid12345 6 789#, uidpIPPI, uid 123, uidhA cke R, uid12#345, uid UsE r, uidhACKER, uid1234567, uidhax0 r, uidPIPPi, uidsecr Et, uidpas SW  orD, uidSEcre  T'),
      ['uid', '12345 6 789', 'pippi', '123', 'ha cke r', '12345', 'use r', 'hacker', '1234567', 'hax0 r', 'pippi', 'secr et', 'pas sw  ord', 'secre  t']);
  })

})

