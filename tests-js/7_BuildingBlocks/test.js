var assert = require('assert');

describe('Kyu 7: Building blocks', function () {

  class Block{

    constructor(data){
      this.width  = data[0];
      this.length = data[1];
      this.height  = data[2];
    }

    getWidth() {
      return this.width;
    }

    getLength() {
      return this.length;
    }

    getHeight() {
      return this.height;
    }

    getVolume() {
      return this.getHeight() * this.getLength() * this.getWidth();
    }

    getSurfaceArea() {
      return 2 * (this.getHeight() * this.getWidth() + this.getHeight() * this.getLength() + this.getWidth() * this.getLength());
    }

  }

  it("test", function() {
    let block = new Block([2,4,6]);

    assert.equal(block.getWidth(),  2)
    assert.equal(block.getLength(), 4)
    assert.equal(block.getHeight(), 6)
    assert.equal(block.getVolume(), 48)
    assert.equal(block.getSurfaceArea(), 88)
  });

});
