var assert = require('assert');

describe('Kyu 7: Composing squared strings', function () {

  it('solution1', function () {
    function compose(s1, s2) {
      const sa1 = s1.split('\n');
      const sa2 = s2.split('\n');
      let result = [];
      for (let i = 0; i < sa1.length; i++) {
        result.push(sa1[i].substring(0, i+1) + sa2[sa2.length-1-i].substring(0, sa2.length-i));
      }
      return result.join('\n');
  }

    assert.equal(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"),
            "bNkTB\nhTrWO\nRTFVi\nCnnIj");
    assert.equal(compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW"),
            "HgYPW\nTGGbM\nIPhqt\nuUMDH");
    assert.equal(compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf"),
            "tzlYf\nOOmYF\nsqPEZ\nxMkBh");
  });

});
