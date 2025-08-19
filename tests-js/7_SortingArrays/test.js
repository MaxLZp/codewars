const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Sorting Arrays', function () {

  function sortArray(a1, a2) {
    var str = a1.reduce((c, e) => c + e[0], '');
    a2.sort((l, r) => str.indexOf(l[0]) - str.indexOf(r[0]));

    return a2;
  }

  it ('test', function(){
    var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
    var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
    assert.deepEqual(sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);
    
    var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
    var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
    assert.deepEqual(sortArray(a1, a2), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']);
    
    var a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
    var a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
    assert.deepEqual(sortArray(a1, a2), ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']);
  });

});
