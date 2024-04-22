var assert = require('assert');

describe('Kyu 7: Make them bark!', function () {

  function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
  }

  Dog.prototype.bark = function () { return 'Woof!'; };

  it("test", () => {
    console.log('Can you make newly created dogs bark?');
    var apollo = new Dog('Apollo', 'Dobermann', 'male', '4');
    var zeus = new Dog('Zeus', 'Dobermann', 'male', '4');

    assert.equal(apollo.bark(), 'Woof!');
    assert.equal(zeus.bark(), 'Woof!');
  });

});
