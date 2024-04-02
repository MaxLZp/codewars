var assert = require('assert');

describe('Holiday II - Plane Seating', function () {


  it("Solution 1", () => {

    function planeSeat(a){
      var seat = a.match(/(\d+)([A-HK-Z])/i);
      if (!seat || +seat[1] > 60) { return 'No Seat!!'; }

      var result = '';
      if (+seat[1] <= 20) { result = 'Front'; }
      if (+seat[1] > 40) { result = 'Back'; }
      if (+seat[1] > 20 && +seat[1] <= 40 ) { result = 'Middle'; }
      if (seat[2].match(/[A-C]/i)) { return result + '-Left'; }
      if (seat[2].match(/[D-F]/i)) { return result + '-Middle'; }
      if (seat[2].match(/[G-K]/i)) { return result + '-Right'; }
    }

    assert.strictEqual(planeSeat('2B'), 'Front-Left');
    assert.strictEqual(planeSeat('20B'), 'Front-Left');
    assert.strictEqual(planeSeat('58I'), 'No Seat!!');
    assert.strictEqual(planeSeat('65B'), 'No Seat!!');
  });

});
