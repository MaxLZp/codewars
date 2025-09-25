const { assert } = require('chai');

describe('Kyu 7: Volume of the Largest Cube that Fits Inside a Given Cylinder', function () {

  function cubeVolume(h, r) {
    var side = Math.sqrt(((r*2)**2) / 2);
    return side > h ? h**3 : side**3;
  }

  function act(h, r, expected) {
    const actual = cubeVolume(h, r);
    const msg = `Invalid solution for height = ${h}, radius = ${r}`;
    assert.approximately(actual, expected, 1e-2, msg);
  }


  it("cubeVolume( 3, 7 )", () => act(3, 7, 27));
  it("cubeVolume( 311, 5 )", () => act(11, 5, 353.553391));

});
