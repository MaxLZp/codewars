var assert = require('assert');

describe('Kyu 7: Whose bicycle?', function () {

  function whoseBicycle(diary1, diary2, diary3) {
    var data = [...arguments].map((v, i) => {
      v['sum'] = Object.values(v).reduce((c, i) => c + i, 0);
      v['i'] = i;
      v['name'] = 'first';
      if (i == 1) { v['name'] = 'second'; }
      if (i == 2) { v['name'] = 'third'; }

      return v;
    }).sort((l, r) => {
        return r['sum'] - l['sum'] || r['i'] - l['i'];
    });

    return `I need to buy a bicycle for my ${data[0]['name']} son.`;
  }

  it('Tests', function () {

    assert.strictEqual(whoseBicycle(
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
      }
    ), 'I need to buy a bicycle for my second son.');

    assert.strictEqual(whoseBicycle(
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      }
    ), 'I need to buy a bicycle for my third son.');

    assert.strictEqual(whoseBicycle(
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 5
      },
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      }
    ), 'I need to buy a bicycle for my third son.');

    assert.strictEqual(whoseBicycle(
      {
        'algebra': 3,
        'history': 7,
        'physics': 8,
        'geography': 4,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 4
      },
      {
        'algebra': 9,
        'history': 7,
        'physics': 9,
        'geography': 9,
        'chemistry': 10
      }
    ), 'I need to buy a bicycle for my third son.');

  })

});
