const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Bumps in the Road', function () {

  it("Solution 1", function() {

    function bump(x){
      return [...x].reduce((c, v) => ( c + (v == 'n' ? 1 : 0)), 0) <= 15 ? 'Woohoo!' : 'Car Dead';
    }

    assert.strictEqual(bump("n"), "Woohoo!");
    assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
    assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
    assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
    assert.strictEqual(bump("______n___n_"), "Woohoo!");

  });

  it("Solution 2", function() {

    function bump(x){
      return x.split('n').length <= 16 ? 'Woohoo!' : 'Car Dead';
    }

    assert.strictEqual(bump("n"), "Woohoo!");
    assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
    assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
    assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
    assert.strictEqual(bump("______n___n_"), "Woohoo!");

  });

});
