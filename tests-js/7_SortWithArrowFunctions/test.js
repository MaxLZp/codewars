const { assert } = require('chai');

describe('Sort with Arrow Functions', function () {

  var OrderPeople = function(people){
    people.sort((l,r) => l.age - r.age);
    return people;
  }

  it("Sample Tests", () => {
    assert.deepEqual(OrderPeople([ { age: 83, name: 'joel' },
    { age: 46, name: 'roger' },
    { age: 99, name: 'vinny' },
    { age: 26, name: 'don' },
    { age: 74, name: 'brendan' } ]), [{age:26,name:"don"},{age:46,name:"roger"},{age:74,name:"brendan"},{age:83,name:"joel"},{age:99,name:"vinny"}], 'The array is still empty')
  });

});
