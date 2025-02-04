const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: All Star Code Challenge #30', function () {

  function Member(name, gender, status = "In a relationship") {
    this.name = name;
    this.gender = gender;
    this.status = status;
  }

  var manCave = function (array) {
    if (array.some(m => m.name == 'Raj')) {
      array = array.filter(m => {
        m.status = "Single";
        return m.gender == 'male';
      });
    }

    return array;
  }

  it("tests", function () {

    var squad = [new Member("Leonard", "male", "Married"),
    new Member("Penny", "female", "Married"),
    new Member("Howard", "male", "Married"),
    new Member("Bernadette", "female", "Married"),
    new Member("Sheldon", "male", "In a relationship"),
    new Member("Amy", "female", "In a relationship"),
    new Member("Raj", "male", "Single")]

    var goodAnswer = [new Member("Leonard", "male", "Single"),
    new Member("Howard", "male", "Single"),
    new Member("Sheldon", "male", "Single"),
    new Member("Raj", "male", "Single")]

    //helperFunction() compares object key:pair equivalence
    assert.deepEqual(manCave(squad), goodAnswer);
    assert.equal(squad[0]["status"] == "Single", true);

  })

});
