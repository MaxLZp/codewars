const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("The Office I - Outed",() =>{

  function outed(meet, boss){
    var score = 0;
    for (const person in meet) {
      if (Object.hasOwnProperty.call(meet, person)) {
        score += meet[person];
        if (person == boss) { score += meet[person]; }
      }
    }
    return (score / Object.keys(meet).length) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
  }

  it("Should pass Example tests",() =>{
    assert.strictEqual(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
    assert.strictEqual(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
    assert.strictEqual(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');
  })

})
