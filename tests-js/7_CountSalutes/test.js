var assert = require('assert');

describe('Kyu 7: Count salutes', function () {

  function countSalutes(hallway) {
    let wrp = hallway.indexOf('>');
    if (wrp < 0) { return 0; }

    let salutes = 0;
    while (wrp >= 0) {
      let slice = hallway.slice(wrp+1);
      let wl = [...slice.matchAll(/</g)];
      salutes += wl.length*2;
      wrp = hallway.indexOf('>', wrp+1);
    }
    return salutes;
  }

  const act = (hallway, expected) => {
    const actual = countSalutes(hallway);
    const input = hallway;
    it(`input: ${input} expected: ${expected} actual: ${actual}`,
       () => assert.strictEqual(actual, expected));
  }

  describe('Fixed tests', () => {
    act('<---->---<---<-->', 4);
    act('------', 0);
    act('>>>>>>>>>>>>>>>>>>>>>----<->', 42);
    act('<<----<>---<', 2);
    act('>', 0);
  });

});

describe('Kyu 7: Count salutes. Other', function () {

  function countSalutes(hallway) {
    let right = 0;
    let salutes = 0;
    for (let p of [...hallway]) {
      if (p === '>') right += 1;
      else if (p === '<') salutes += 2 * right;
    }
    return salutes;
  }

  const act = (hallway, expected) => {
    const actual = countSalutes(hallway);
    const input = hallway;
    it(`input: ${input} expected: ${expected} actual: ${actual}`,
       () => assert.strictEqual(actual, expected));
  }

  describe('Fixed tests', () => {
    act('<---->---<---<-->', 4);
    act('------', 0);
    act('>>>>>>>>>>>>>>>>>>>>>----<->', 42);
    act('<<----<>---<', 2);
    act('>', 0);
  });

});
