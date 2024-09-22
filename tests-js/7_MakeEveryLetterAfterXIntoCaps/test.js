var assert = require('assert');

describe('Kyu 7: Make every letter after X into caps.', function () {

  var makeEveryLetterAfterXCaps = function (str, letter) {
    var result = [...str];
    for (let index = 0; index < result.length - 1; index++) {
      if (result[index] == letter) {
        result[index+1] = result[index+1].toUpperCase();
      }
    }

    return result.join('');
  }

  it("test", () => {
    assert.strictEqual(makeEveryLetterAfterXCaps('bac', 'a'), 'baC')
    assert.strictEqual(makeEveryLetterAfterXCaps('and the cow jumped over the moon', 'n'), 'anD the cow jumped over the moon')
    assert.strictEqual(makeEveryLetterAfterXCaps('where are they now', ' '), 'where Are They Now')
    assert.strictEqual(makeEveryLetterAfterXCaps('aaaa', 'a'), "aAaA")

    assert.strictEqual(makeEveryLetterAfterXCaps('IULpJ9xspPgqw3wPpqn 1LPJubOpjevxOXNR28A PZyjij3h32 yNIDLFAdzpZ9 AthYeV 2iqAbuphdirPYHJEduv vAtXZLGiuibgRZ IkSNIaw4Fo GIZMGjYCBnLk PflVi0 FdKUHJjm0vS2Pv ZxYMjoE PqF6QJ9yqL0KOkLGdqii8 RfINbzXRgWR6bbgc', 'A'), "IULpJ9xspPgqw3wPpqn 1LPJubOpjevxOXNR28A PZyjij3h32 yNIDLFADzpZ9 AThYeV 2iqABuphdirPYHJEduv vATXZLGiuibgRZ IkSNIaw4Fo GIZMGjYCBnLk PflVi0 FdKUHJjm0vS2Pv ZxYMjoE PqF6QJ9yqL0KOkLGdqii8 RfINbzXRgWR6bbgc")
    assert.strictEqual(makeEveryLetterAfterXCaps('HhHhHHhHHHhhHHHHHHHHHHhHHhhHHhHHHHhhhhhHhhHhHhHHhHHHhhhHhHhhHHhHhHHHHhHHHhhHHHHhhHhHhhhHhHhHhHHHhhhhHHhHhHhhhhhHHhHH', 'H'), "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
    assert.strictEqual(makeEveryLetterAfterXCaps('337l9ka6doDrMTHdC9 dunW2y3eaLmbiF0lrkHrOtH MBU8arwtWif91PmSc u QM1plHhHhHHhHHHhhHHHHHHHHHHhHHhhHHhHHHHhhhhhHhhHhHhHHhHHHhhhHhHhhHHhHhHHHHhHHHhhHHHHhhHhHhhhHhHhHhHHHhhhhHHhHhHhhhhhHHhHHxgyY6BVoBcp sSgbWotR 03JGom2uyUrMYgKmEx7JB2h', 'H'), "337l9ka6doDrMTHDC9 dunW2y3eaLmbiF0lrkHROtH MBU8arwtWif91PmSc u QM1plHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHXgyY6BVoBcp sSgbWotR 03JGom2uyUrMYgKmEx7JB2h")
  });

});
