const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Where Are My Glasses?', function () {

  function findGlasses(arr){
    return arr.findIndex((element) => (/O-+O/.test(element)));
  }

  const doTest = (arr, expected) =>
  it(`findGlasses(${JSON.stringify(arr)})`, () => assert.strictEqual(findGlasses(arr), expected))

  doTest(['phone', 'O-O', 'coins', 'keys'], 1)
  doTest(['OO', 'wallet', 'O##O', 'O----O'], 3)
  doTest(['O_O', 'O-O', 'OwO'], 1)
  doTest(['O--#--O', 'dustO---Odust', 'more dust'], 1)
  doTest(['floor', 'the floor again', 'pockets', 'bed', 'cabinet', 'the top of my head O-O'], 5)
  doTest(['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O'], 3)

});
