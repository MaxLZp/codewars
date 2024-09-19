var chai = require('chai');

describe('Kyu 7: Color of the moment', function () {

  function hexToTime(hexCode) {
    var [h, m, s] = hexCode.match(/[a-f0-9]{2}/g).map(n => parseInt(n, 16));
    if (h > 23 || m > 59 || s > 59) {
      throw 'Thats not a valid time!';
    }

    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  it("Should pass sample tests", () => {
    chai.assert.equal(hexToTime('#0d3737'), '13:55:55');
    chai.assert.equal(hexToTime('#071506'), '07:21:06');
    chai.expect(function() {hexToTime('#2c3721')}).to.throw('Thats not a valid time!');
    chai.expect(function() {hexToTime('#180000')}).to.throw('Thats not a valid time!');
    chai.expect(function() {hexToTime('#0d373c')}).to.throw('Thats not a valid time!');
  });

});
