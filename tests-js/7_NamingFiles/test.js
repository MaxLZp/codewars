const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Naming Files', function () {

  function nameFile(fmt, nbr, start) {
    if (
      nbr <= 0
      || Number.parseInt(nbr) != nbr
      || !Number.isInteger(start)
    ) { return []; }

    var result = [];
    for (let index = start; index < start+nbr; index++) {
      result.push(fmt.replaceAll(/<index_no>/g, index));
    }
    return result;
  }

  it("Description cases", function() {
    assert.deepEqual(nameFile('IMG <index_no>', 4, 1), ["IMG 1", "IMG 2", "IMG 3", "IMG 4"]);
    assert.deepEqual(nameFile('image #<index_no>.jpg', 3, 7), ["image #7.jpg", "image #8.jpg", "image #9.jpg"]);
    assert.deepEqual(nameFile('#<index_no> #<index_no>', 3, -2), ["#-2 #-2", "#-1 #-1", "#0 #0"]);
  });
  it("More examples", function() {
    assert.deepEqual(nameFile('<file> number <index_no>', 5, 0), ["<file> number 0", "<file> number 1", "<file> number 2", "<file> number 3", "<file> number 4"]);
    assert.deepEqual(nameFile('<file_no> number <index_no>', 2, -1), ["<file_no> number -1", "<file_no> number 0"]);
    assert.deepEqual(nameFile('file', 2, 3), ["file", "file"]);
    assert.deepEqual(nameFile('<file_no> number <index_no>', -1, 0), []);
    assert.deepEqual(nameFile('file <index_no>', 2, 0.1), []);
    assert.deepEqual(nameFile('file <index_no>', 0.2, 0), []);
    assert.deepEqual(nameFile('file <index_no>', 0, 0), []);
  });

});
