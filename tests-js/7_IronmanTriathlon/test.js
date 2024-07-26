const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Ironman Triathlon', function () {

  function iTri(s){
    const swim = 2.4;
    const bike = 112;
    const run = 26.2;
    const total = swim + bike + run;
    if ( s === 0 ) { return 'Starting Line... Good Luck!'; }
    if (s <= swim) { return { 'Swim': `${(total - s).toFixed(2)} to go!`}; }
    if (s <= swim + bike) { return { 'Bike': `${(total - s).toFixed(2)} to go!`}; }
    if (s <= swim + bike) { return { 'Bike': `${(total - s).toFixed(2)} to go!`}; }
    if (s <= total - 10) { return { 'Bike': `${(total - s).toFixed(2)} to go!`}; }
    if (s <= total) { return {'Run': `Nearly there!`}; }
    return "You're done! Stop running!";
  }

  it("Testing for fixed tests", () => {
    assert.deepEqual(iTri(36),{'Bike':'104.60 to go!'});
    assert.deepEqual(iTri(103.5),{'Bike':'37.10 to go!'});
    assert.deepEqual(iTri(0),'Starting Line... Good Luck!');
    assert.deepEqual(iTri(2),{'Swim':'138.60 to go!'});
  });

});
