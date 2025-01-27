var {assert} = require('chai');

describe('Kyu 7: Spot the Differences', function () {

  var leagueTable = [ [ 'teamA', 3 ], [ 'teamB', 3 ], [ 'teamC', 3 ], [ 'teamD', 3 ] ];

  function leagueCalculate(team1, team2, result) {
    if (result == 'win') {
      leagueTable.forEach(t => {if(t[0] == team1) { t[1] += 3;} });
    }
    else {
      leagueTable.forEach(t => {if(t[0] == team1 || t[0] == team2) { t[1] += 1;} });
    }

    leagueTable = leagueTable.sort((left, right) => {
      if (left[1] == right[1]) {
        return left[0].localeCompare(right[0]);
      }
      return right[1] - left[1];
    })

    return leagueTable;
  }

  it('solution2', function () {
    assert.deepEqual(leagueCalculate("teamA","teamB","draw"), [["teamA",4],["teamB",4],["teamC",3],["teamD",3]]);
    assert.deepEqual(leagueCalculate("teamC","teamD","win"), [["teamC",6],["teamA",4],["teamB",4],["teamD",3]]);
    assert.deepEqual(leagueCalculate("teamA","teamC","draw"), [["teamC",7],["teamA",5],["teamB",4],["teamD",3]]);
    assert.deepEqual(leagueCalculate("teamB","teamD","win"), [["teamB",7],["teamC",7],["teamA",5],["teamD",3]]);
    assert.deepEqual(leagueCalculate("teamA","teamB","win"), [["teamA",8],["teamB",7],["teamC",7],["teamD",3]]);
    assert.deepEqual(leagueCalculate("teamC","teamD","draw"), [["teamA",8],["teamC",8],["teamB",7],["teamD",4]]);
    assert.deepEqual(leagueCalculate("teamD","teamA","draw"), [["teamA",9],["teamC",8],["teamB",7],["teamD",5]]);
    assert.deepEqual(leagueCalculate("teamC","teamB","win"), [["teamC",11],["teamA",9],["teamB",7],["teamD",5]]);
    assert.deepEqual(leagueCalculate("teamB","teamD","win"), [["teamC",11],["teamB",10],["teamA",9],["teamD",5]]);
    assert.deepEqual(leagueCalculate("teamA","teamB","draw"), [["teamB",11],["teamC",11],["teamA",10],["teamD",5]]);
  });

});
