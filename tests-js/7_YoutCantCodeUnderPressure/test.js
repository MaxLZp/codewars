const {assert} = require('chai');

describe('Kyu 7: You Cant Code Under Pressure #2', function () {

  function Counter() {

    var counter = 0;
    this.check = function() { return counter; };
    this.increment = function() { counter++; };
  
  }

  it("Fixed Tests", () => {
    const counter = new Counter;
    assert.isFunction( counter.check, `method Counter.check` );
    assert.isFunction( counter.increment, `method Counter.increment` );
    counter.increment();
    counter.increment();
    assert.strictEqual( counter.check(), 2 );
   });

});
