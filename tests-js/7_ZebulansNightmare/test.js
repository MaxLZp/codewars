const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Zebulans Nightmare', function () {

  function zebulansNightmare(functionName) {
    return functionName.replace(/_\w/g, (m) => m[1].toUpperCase());
  }

  it("Fixed Tests", () => {
    assert.equal(zebulansNightmare('camel_case'), 'camelCase')
    assert.equal(zebulansNightmare('mark_as_issue'), 'markAsIssue')
    assert.equal(zebulansNightmare('copy_paste_pep8'), 'copyPastePep8')
    assert.equal(zebulansNightmare('goto_next_kata'), 'gotoNextKata')
    assert.equal(zebulansNightmare('repeat'), 'repeat')
    assert.equal(zebulansNightmare('trolling_is_fun'), 'trollingIsFun')
    assert.equal(zebulansNightmare('why'), 'why')
    assert.equal(zebulansNightmare('123_abc_def'), '123AbcDef')
  });

});
