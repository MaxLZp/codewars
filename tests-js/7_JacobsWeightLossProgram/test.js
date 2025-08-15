var assert = require('assert');

describe('Kyu 7: Jacobs Weight Loss Program', function () {

  function loseWeight(gender, weight, duration){
    if (!/M|F/.test(gender)) { return 'Invalid gender'; }
    if (weight <= 0) { return 'Invalid weight'; }
    if (duration <= 0) { return 'Invalid duration'; }

    var mult = gender == 'M' ? 0.985 : 0.988;
    for(var i = 0; i < duration; i ++) {
      weight *= mult;
    }
    //or
    //weight *= Math.pow(mult, duration);

    return (Math.round(weight*10))/10;
  }

  it("Should reject invalid genders",function(){
    assert.equal(loseWeight('K', 200, 10), 'Invalid gender');
  })
  it("Should reject weights less than or equal to zero",function(){
    assert.equal(loseWeight('M', 0, 10), 'Invalid weight');
  })
  it("Should reject negative or zero durations",function(){
    assert.equal(loseWeight('F', 160, 0), 'Invalid duration');
    assert.equal(loseWeight('F', 160, -10), 'Invalid duration');
  })

  it("Typical male",function(){
    assert.equal(loseWeight('M', 250, 5), 231.8);
  })
  it("Typical female",function(){
    assert.equal(loseWeight('F', 190, 8), 172.5);
  })
  it("Very heavy male",function(){
    assert.equal(loseWeight('M', 405, 12), 337.8)
  })
  it("Light female",function(){
    assert.equal(loseWeight('F', 130, 7), 119.5)
  })

});
