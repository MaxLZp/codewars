var assert = require('assert');

describe('Kyu 7: PPAP', function () {

  function ppap(arr1, arr2) {
    arr1 = arr1.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase());
    arr2 = arr2.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase());
    var common = arr1.includes(arr2[0]) ? arr2[0] : arr2[1];

    return [common, ...arr2.filter(e => e != common), ...arr1.filter(e => e != common), common]
      .join('-');
  }


  it('Sample tests', () => {
    assert.equal(ppap(["APPLE", "pen"], ["peN", "pInEapple"]), "Pen-Pineapple-Apple-Pen");
  })


});
