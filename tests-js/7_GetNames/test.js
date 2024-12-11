var assert = require('assert');

describe('Kyu 7: getNames()', function () {

  it('solution1', function () {

    function getNames(data){
      // Task is to fix an error in:
      // return data.map(function(item){item.name});

      return data.map(function(item){ return item.name; });
    }

    const data = [
      {name: 'Joe', age: 20},
      {name: 'Bill', age: 30},
      {name: 'Kate', age: 23}
    ]

    assert.deepEqual(getNames(data), ['Joe', 'Bill', 'Kate'])

  });

});
