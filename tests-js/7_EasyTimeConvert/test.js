const { assert } = require('chai');

describe('Kyu 7: Easy Time Convert', function () {

  it('solution1', function () {

    function timeConvert(num) { 
      return num > 0 
        ? `${parseInt(num / 60)}`.padStart(2, '0') + ':' + `${num % 60}`.padStart(2, '0') 
        : '00:00';
    }

    assert.strictEqual(timeConvert(0), "00:00");
    assert.strictEqual(timeConvert(-6), "00:00");
    assert.strictEqual(timeConvert(8), '0'+0+':'+'0'+8);
    assert.strictEqual(timeConvert(32), '0'+0+':'+32);
    assert.strictEqual(timeConvert(75), '0'+1+':'+15);
    assert.strictEqual(timeConvert(63), '0'+1+':'+'0'+3);
    assert.strictEqual(timeConvert(134), '0'+2+':'+14);
    assert.strictEqual(timeConvert(180), '0'+3+':'+'0'+0);
    assert.strictEqual(timeConvert(970), 16+':'+10);
    assert.strictEqual(timeConvert(565757), 9429+':'+17);

  });

});
