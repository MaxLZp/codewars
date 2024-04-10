var assert = require('assert');

describe('Kyu 7: Help your fellow warrior!', function () {

  it('solution1', function () {
    function getHonorPath(honorScore, targetHonorScore) {
      if (honorScore >= targetHonorScore) {
        return {};
      }
      return {
        '2kyus': (targetHonorScore - honorScore) % 2,
        '1kyus': Math.floor((targetHonorScore - honorScore) / 2)
      }
    }

    assert.equal(getHonorPath(2, 11)['2kyus'], 1, 'Needs to solve 1 2kyus');
    assert.equal(getHonorPath(2, 11)['1kyus'], 4, 'Needs to solve 4 1kyus');
    assert.equal(getHonorPath(11, 2)['2kyus'], undefined, 'Let warrior go for drinks!');
    assert.equal(getHonorPath(11, 2)['1kyus'], undefined, 'Let warrior go for drinks!');
  });

});
