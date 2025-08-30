var assert = require('assert');

describe('Kyu 7: Consonant Please', function () {

  function sortLetters() {
    return arguments[0].reduce((c, e) => {
      return e.reduce((c, ch) => {
        if (/[aouei]/i.test(ch)){ c[0].push(ch.toUpperCase()); }
        else if (/[a-z]/i.test(ch)){ c[1].push(ch.toUpperCase()); }
        return c;
      }, c);
    }, [[], []]);
  }

  it("Tests", () => {
    assert.deepEqual(sortLetters([[1,"a","H"],[3,"o","s"],[4,"E","i"]]), [["A","O","E","I"],["H","S"]]);
    assert.deepEqual(sortLetters([["c","A",2],[5,"e","x"],[9,"W","U"]]), [["A","E","U"],["C","X","W"]]);
    assert.deepEqual(sortLetters([["a",2,"Q"],["I",3,"n"],["E",6,"i"]]), [["A","I","E","I"],["Q","N"]]);
    assert.deepEqual(sortLetters([[9,"i","H"],[0,"U","s"],[1,"o","J"]]), [["I","U","O"],["H","S","J"]]);   
  })
});
