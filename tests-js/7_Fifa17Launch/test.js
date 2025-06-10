var assert = require('assert');

describe('Kyu 7: Fifa 17 launch', function () {

  it("Solution 1", () => {

    function fifa(ticket, results){
      var lineIndex = 0;
      var total = 0;
      for (const line in ticket) {
        var [h, a] = results[lineIndex].split('-');
        if (h - a > 0 && line == 'Home') { total += +ticket[line].replace('£', ''); }
        if (a - h > 0 && line == 'Away') { total += +ticket[line].replace('£', ''); }
        if (a == h && line == 'Draw') { total += +ticket[line].replace('£', ''); }
        lineIndex++;
      }

      return `£${total}`;
    }

    assert.equal(fifa({'Home':'£75', 'Away':'£5000', 'Draw':'£1324'}, ['1-0', '2-3', '0-1']), '£5075');

  })

});
