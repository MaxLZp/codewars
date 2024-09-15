var assert = require('assert');

describe('Query Converter', () => {

  var solution = (str) => {
    return str.replace(/^.*\?/, '')
      .split('&')
      .reduce((obj, q) => {
        const [k, v] = q.split('=');
        obj[k] = v;
        return obj;
      }, {});
  }

  it('basic tests', () => {
    assert.deepEqual(solution('www.whatsup.com?name=Huy&lastname=dang'), {name: "Huy", lastname: "dang"});
    assert.deepEqual(solution('www.whatsup.com?name=Sam&age=29'), {name: "Sam", age: '29'});
    assert.deepEqual(solution('www.whatsup.com?shoe=Nike&size=11'), {shoe: "Nike", size: '11'});
    assert.deepEqual(solution('www.whatsup.com?brand=Coach&itemId=9123'), {brand:"Coach", itemId:'9123'});
    assert.deepEqual(solution('www.whatsup.com?make=Honda&model=Civic'), {make: 'Honda', model: 'Civic'});
    assert.deepEqual(solution('www.whatsup.com?item=iphone&gen=X'), {item:'iphone', gen:'X'});
  });

});
