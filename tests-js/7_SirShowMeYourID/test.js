var assert = require('assert');

describe('Kyu 7: Sir, showMe yourID', function () {
  it('solution1', function () {

    function showMe(yourID){
      return /^[A-Z][a-z]+(-[A-Z][a-z]+)*$/.test(yourID);
    }

    assert.equal(showMe("Francis"), true, "Francis is a name !")
    assert.equal(showMe("Jean-Eluard"), true, "Jean-Eluard is a name!")
    assert.equal(showMe("Le Mec"), false, "Le Mec is not a name!")
    assert.equal(showMe("Bernard-Henry-Levy"), true, "Bernard-Henry-Levy is a name!")
    assert.equal(showMe("Mémé Gertrude"), false, "Mémé Gertrude is not a name! It's my Grandma ")

    assert.equal(showMe("jaques"), false, "jaques")
    assert.equal(showMe("1"), false, "`")
    assert.equal(showMe("jaques-Marc"), false, "jaques-Marc")
    assert.equal(showMe("-Frances-Beatrice"), false, "-Frances-Beatrice")
    assert.equal(showMe("-Jean"), false, "-Jean")
    assert.equal(showMe("Jean-"), false, "Jean-")
  });

});
