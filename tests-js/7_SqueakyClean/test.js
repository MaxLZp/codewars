const { expect } = require('chai');

describe('Kyu 7: Squeaky Clean', function () {

  function squeakyClean(arr) {
    return arr.filter((e) => (!!e));
  }

  it("tests", function() {
    expect(squeakyClean([1,2,3,-1,1.1])).to.deep.equal([1,2,3,-1,1.1]);
    expect(squeakyClean(['hello', '14'])).to.deep.equal(['hello', '14']);
    expect(squeakyClean(['click1','click2',null,'','','submitForm'])).to.deep.equal(['click1', 'click2','submitForm'] );
  });

});

