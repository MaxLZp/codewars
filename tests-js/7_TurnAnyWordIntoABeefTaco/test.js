var assert = require('assert');

describe('Kyu 7: Turn any word into a beef taco', function () {

  function tacofy(word) {
    var map = {
      't': 'tomato',
      'l': 'lettuce',
      'c': 'cheese',
      'g': 'guacamole',
      's': 'salsa',
      'a': 'beef',
      'e': 'beef',
      'i': 'beef',
      'o': 'beef',
      'u': 'beef'
    };
    var taco = ['shell'];
    for (let index = 0; index < word.length; index++) {
      if (undefined == map[word[index].toLowerCase()]) { continue; }
      taco.push(map[word[index].toLowerCase()]);
    }
    taco.push('shell');
    return taco;
  }

  it("should pass basic tests", function(){
    assert.deepEqual(tacofy(""),['shell', 'shell'])
    assert.deepEqual(tacofy("a"), ['shell', 'beef', 'shell'])
    assert.deepEqual(tacofy("ggg"), ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell'])
    assert.deepEqual(tacofy("ogl"),['shell', 'beef', 'guacamole', 'lettuce', 'shell'])
    assert.deepEqual(tacofy("ydjkpwqrzto"), ['shell', 'tomato', 'beef', 'shell'])
    assert.deepEqual(tacofy("unLOdrdoFVh"), ['shell', 'beef', 'lettuce', 'beef', 'beef', 'shell'])
  });

});
