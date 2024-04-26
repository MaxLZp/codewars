const { expect } = require('chai');

describe('Kyu 7: Make Me Slow', function () {

  it('solution 1', function () {
    function makeMeSlow() {
      var start = Date.now();
      while (Date.now() < start + 7000) {}

      for (let x = 0; x < 1000000; ++x) { }
    }

    const start = new Date().getTime()
    makeMeSlow()
    const duration = new Date().getTime() - start

    expect(duration).to.be.at.least(7000, 'Function finished in too few milliseconds');
  });

});
