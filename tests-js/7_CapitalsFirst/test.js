const { assert } = require('chai');

describe('Kyu 7: Capitals first!', function () {

  function capitalsFirst(str){
    var w = str.split(' ');
    var c = w.filter(w => /[A-Z]/.test(w[0]));
    var s = w.filter(w => /[a-x]/.test(w[0]));

    return [...c, ...s].join(' ');
  }

  assert.strictEqual(capitalsFirst("hey You, Sort me Already!"), "You, Sort Already! hey me");
  assert.strictEqual(capitalsFirst("123 baby You and Me"), "You Me baby and");

});
