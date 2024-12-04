var assert = require('assert');

describe('Kyu 7: Ranking position', () => {

  function ranking(people) {
    var position = 0;
    return people.sort(function (left, right) {
      return right.points - left.points || left.name.localeCompare(right.name);
    }).map((el, i, a) => {
      position++;
      el.position = i == 0 ? position : (el.points == a[i - 1].points ? a[i - 1].position : position);
      return el;
    });
  }

  it("Basic test, no. 1", () =>  {
    const input = [
      {
        name: "John",
        points: 100,
      },
      {
        name: "Bob",
        points: 130,
      },
      {
        name: "Mary",
        points: 120,
      },
      {
        name: "Kate",
        points: 120,
      },
    ];

    const output = [
      {
        name: "Bob",
        points: 130,
        position: 1,
      },
      {
        name: "Kate",
        points: 120,
        position: 2,
      },
      {
        name: "Mary",
        points: 120,
        position: 2,
      },
      {
        name: "John",
        points: 100,
        position: 4,
      },
    ]

    assert.deepEqual(ranking(input), output);
  });

  it("Basic test, no. 2", () =>  {
    const input = [
      {
        name: "Bob",
        points: 130,
      },
      {
        name: "Mary",
        points: 120,
      },
      {
        name: "John",
        points: 100,
      },
    ];

    const output = [
      {
        name: "Bob",
        points: 130,
        position: 1,
      },
      {
        name: "Mary",
        points: 120,
        position: 2,
      },
      {
        name: "John",
        points: 100,
        position: 3,
      },
    ]

    assert.deepEqual(ranking(input), output);
  });

  it("Basic test, no. 3", () =>  {
    const input = [
      {
        name: "Bob",
        points: 100,
      },
      {
        name: "Mary",
        points: 100,
      },
      {
        name: "John",
        points: 100,
      },
    ];

    const output = [
      {
        name: "Bob",
        points: 100,
        position: 1,
      },
      {
        name: "John",
        points: 100,
        position: 1,
      },
      {
        name: "Mary",
        points: 100,
        position: 1,
      },
    ]

    assert.deepEqual(ranking(input), output);
  });

  it("Basic test, no. 4", () =>  {
    const input = [
      {
        name: "John",
        points: 100,
      },
    ];

    const output = [
      {
        name: "John",
        points: 100,
        position: 1,
      },
    ];

    assert.deepEqual(ranking(input), output);
  });

  it("Basic test, no. 5", () =>  {
    const input = [];
    const output = [];

    assert.deepEqual(ranking(input), output);
  });
});
