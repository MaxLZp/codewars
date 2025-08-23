const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Wise drunk man', function () {

  it('solution1', function () {

    function wdm(talk){
      return talk.replace(/puke|hiccup/g, '').replace(/\s+/g, ' ').trim();
    }

    assert.strictEqual(wdm("puke All's well hiccup     that ends hiccup well puke"), "All's well that ends well")
    assert.strictEqual(wdm('puke make hiccup hiccup money puke puke puke and hiccup hiccup puke spend hiccup puke puke it hiccup wisely.'),'make money and spend it wisely.')

  });


});
