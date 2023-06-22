var assert = require('assert');

describe('Kyu 8: Calculate BMI', function () {
  it('solution1', function () {

    assert.equal(bmi(80, 1.80), "Normal");

    function bmi(weight, height) {
      var bmi = weight / (height*height);
      if (bmi <= 18.5) { return "Underweight"; };
      if (bmi <= 25.0) { return "Normal"; };
      if (bmi <= 30.0) { return "Overweight"; };
      if (bmi > 30) { return "Obese"; };
    }
  });
});
