var assert = require('assert');

describe('Kyu 7: I need a lookup quick!', function () {

  it('solution1', function () {

    Array.prototype.toDictionary = function (keyFn, valueFn) {
      return this.reduce((carry, el, i) => {
        carry[keyFn(el)] = valueFn ? valueFn(el) : el;
        return carry;
      }, {});
    };



    var equals = function (x, y) {
      if (x === y) return true;
      for (var p in x) {
          if (!y[p] && x[p]) return false;
          if (x[p] === y[p]) continue;
          if (typeof (x[p]) !== "object") return false;
          if (!equals(x[p], y[p])) return false;
      }
      for (p in y) {
          if (y[p] && !x[p]) return false;
      }
      return true;
    }

    var arr = [1, 2, 3, 4, 5];
    assert.equal(equals(arr.toDictionary(k => k, v => true), { 1: true, 2: true, 3: true, 4: true, 5: true }), true);
    assert.equal(equals(arr.toDictionary(k => k, v => v * v), { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 }), true);
    assert.equal(equals(arr.toDictionary(k=>k), { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }), true);


    /*
    Expected :{"0":{"name":"hpebwbyuajibmecdsogt","surname":"lotrctqahjpqtwypcjea","id":0},"1":{"name":"jzcmfnurrephkjqoismt","surname":"ebydxdfilglviyzjkrtx","id":1},"2":{"name":"mxdexvszxurjxfcyznqn","surname":"npapflfeyckippbyaeqe","id":2},"3":{"name":"egckamiqizptrheieenh","surname":"sxllowwebgxyxtrbqmhk","id":3},"4":{"name":"wzvthcthdxktybemnrct","surname":"ieidhdvvxoapnwrqvvxa","id":4}}
    *****************************************************************************************
    Testing with array = [{"name":"hpebwbyuajibmecdsogt","surname":"lotrctqahjpqtwypcjea","id":0},{"name":"jzcmfnurrephkjqoismt","surname":"ebydxdfilglviyzjkrtx","id":1},{"name":"mxdexvszxurjxfcyznqn","surname":"npapflfeyckippbyaeqe","id":2},{"name":"egckamiqizptrheieenh","surname":"sxllowwebgxyxtrbqmhk","id":3},{"name":"wzvthcthdxktybemnrct","surname":"ieidhdvvxoapnwrqvvxa","id":4}] Key = id Value = UNDEFINED
    */
    arr = [{"name":"hpebwbyuajibmecdsogt","surname":"lotrctqahjpqtwypcjea","id":0},{"name":"jzcmfnurrephkjqoismt","surname":"ebydxdfilglviyzjkrtx","id":1},{"name":"mxdexvszxurjxfcyznqn","surname":"npapflfeyckippbyaeqe","id":2},{"name":"egckamiqizptrheieenh","surname":"sxllowwebgxyxtrbqmhk","id":3},{"name":"wzvthcthdxktybemnrct","surname":"ieidhdvvxoapnwrqvvxa","id":4}]
    var expected = {"0":{"name":"hpebwbyuajibmecdsogt","surname":"lotrctqahjpqtwypcjea","id":0},"1":{"name":"jzcmfnurrephkjqoismt","surname":"ebydxdfilglviyzjkrtx","id":1},"2":{"name":"mxdexvszxurjxfcyznqn","surname":"npapflfeyckippbyaeqe","id":2},"3":{"name":"egckamiqizptrheieenh","surname":"sxllowwebgxyxtrbqmhk","id":3},"4":{"name":"wzvthcthdxktybemnrct","surname":"ieidhdvvxoapnwrqvvxa","id":4}};
    var t = arr.toDictionary(k=>k.id);
    assert.equal(equals(arr.toDictionary(k=>k.id), expected), true);

  });

});
