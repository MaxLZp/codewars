const {assert} = require("chai");

describe('Kyu 7: Naughty or Nice', function () {

  function getNiceNames(people){
    return people.filter(p => p.wasNice).map(p => p.name);
  }
  
  function getNaughtyNames(people){
    return people.filter(p => !p.wasNice).map(p => p.name);;
  }

  it("Test", () => {
    function justNames(array){
      return array.map(function(e){return e.name});  
    }
    
    var naughty = [
      {name: 'xDranik', wasNice: false}
    ];
    var nice = [
      {name: 'Santa', wasNice: true},
      {name: 'Warrior reading this kata', wasNice: true}
    ];
    
    assert.deepEqual(getNiceNames(naughty), []);
    assert.deepEqual(getNaughtyNames(nice), []);
    
    assert.deepEqual(getNiceNames(nice.concat(naughty)), justNames(nice));
    assert.deepEqual(getNaughtyNames(nice.concat(naughty)), justNames(naughty));
     
  });

});
