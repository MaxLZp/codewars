var assert = require('assert');

describe('Kyu 7: Histogram - H1', function () {

  function histogram(results) {
    var histogram = '';

    for(var i = results.length - 1; i >= 0; i--) {
      var bar = results[i] == 0 ? '' : '#'.repeat(results[i])+ ` ${results[i]}`;
      histogram += `${i+1}|${bar}\n`;
    }
    
    return histogram;

    // return results.reduceRight((c, val, i) => {
    //   var bar = val == 0 ? '' : '#'.repeat(val)+ ` ${val}`;
    //   return c + `${i+1}|${bar}\n`;
    // }, '');

  }

  it("Fixed Tests", () => {
    var expected=
`6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
`
        var hist = histogram([7,3,10,1,0,5]);
        console.log(hist)
        assert.equal(hist, expected)
  });

});
