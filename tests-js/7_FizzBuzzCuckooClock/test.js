var assert = require('assert');

describe('Kyu 7: Fizz Buzz Cuckoo Clock', function () {

  function fizzBuzzCuckooClock(time) {
    var [match, hrs, min] = time.match(/(\d{2}):(\d{2})/);
    var hrs = (+hrs + 12) % 12 || 12;
    switch (true) {
      case +min == 0: return 'Cuckoo '.repeat(hrs).trim();
      case +min == 30: return 'Cuckoo';
      case (+min % 3 == 0) && (+min % 5 == 0) : return 'Fizz Buzz';
      case +min % 3 == 0: return 'Fizz';
      case +min % 5 == 0: return 'Buzz';
      default: return 'tick';
    }
  }

it ("13:34", function(){
    assert.equal(fizzBuzzCuckooClock("13:34"), "tick");
  });
  it ("21:00", function(){
    assert.equal(fizzBuzzCuckooClock("21:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
  });
  it("11:15", function(){
    assert.equal(fizzBuzzCuckooClock("11:15"), "Fizz Buzz");
  });
  it ("03:03", function(){
    assert.equal(fizzBuzzCuckooClock("03:03"), "Fizz");
  });
  it ("14:30", function(){
    assert.equal(fizzBuzzCuckooClock("14:30"), "Cuckoo");
  });
  it ("08:55", function(){
    assert.equal(fizzBuzzCuckooClock("08:55"), "Buzz");
  });
  it ("00:00", function(){
    assert.equal(fizzBuzzCuckooClock("00:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
  });
  it ("12:00", function(){
    assert.equal(fizzBuzzCuckooClock("12:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
  });

});
