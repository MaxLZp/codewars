var assert = require('assert');

describe('Kyu 7: Whos Online?', function () {

  const whosOnline = (friends) => {
    return friends.reduce((carry, friend) => {
      var status = friend['status'] == 'online' && friend['lastActivity'] > 10 ? 'away' : friend['status'];
      if (! carry.hasOwnProperty(status)) {
        carry[status] = [];
      }
      carry[status].push(friend['username']);

      return carry;
    }, {});
  }

  var friends;

  it('Example test one of each', function () {
    friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]
    assert.deepEqual(whosOnline(friends), {
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob']
    }, 'Wrong result for example one of each')
  })

  it('Example test no one online', function () {
    friends = [{
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]

    assert.deepEqual(whosOnline(friends), {
      offline: ['Lucy'],
      away: ['Bob']
    }, 'Wrong result for example no one online')
  })

});
