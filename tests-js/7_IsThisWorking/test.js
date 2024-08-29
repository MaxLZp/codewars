var assert = require('assert');

describe('Kyu 7: Is this working?', function () {
  it('solution1', function () {

    // Before:
    // function Counter(){
    //   var self = this;
    //   self.count = 0;

    //   self.updateCount = function(){
    //     self.count++
    //   };
    // }

    // AFter:
    function Counter(){
      this.count = 0;

      this.updateCount = () => this.count++;
    }

    var counter = new Counter();
    assert.equal(counter.count, 0, "Counter should be reset");

    counter.updateCount();
    assert.equal(counter.count, 1, "Counter should have been updated");

    var counter2 = new Counter();
    assert.equal(counter2.count, 0, "New counter should use different value");

    assert.equal(counter.count, 1, "Old counter should have preserved its value");
  });

});
