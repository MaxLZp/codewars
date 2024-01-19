var assert = require('assert');

describe('Kyu 7: Numbers to Letters', function () {

  function switcher(n){
    return n.map((num) => {
      switch (+num) {
        case 27: return '!';
        case 28: return '?';
        case 29: return ' ';
        default: return String.fromCharCode(123 - (+num));
      }
    }).join('');
  }

  it("Should handle manual tests", function () {
    assert.equal(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
    assert.equal(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw');
    assert.equal(switcher(['4', '24']), 'wc');
  });

});
