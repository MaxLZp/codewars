var assert = require('assert');

describe('Kyu 7: Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer', function () {

  function getFirstPython(list) {
    var dev = list.find(p => p.language == 'Python');
    
    return dev ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers';
  }


  it("Should pass sample tests", () => {
    var list1 = [
      { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
      { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
      { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
    ];
    
    var list2 = [
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
      { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
    ];
    
    assert.equal(getFirstPython(list1), 'Victoria, Puerto Rico');
    assert.equal(getFirstPython(list2), 'There will be no Python developers');
  });

});
