var assert = require('assert');

describe('Kyu 7: Mutate My Strings', function () {

  it('Solution 1', () => {
    function mutateMyStrings(stringOne, stringTwo) {
      var result = new Set();
      for (let i = 0; i <= stringTwo.length; i++) {
        result.add(stringTwo.slice(0, i) + stringOne.slice(i));
      }
      return Array.from(result).join('\n')+'\n';
    }

    assert.equal(
      mutateMyStrings('bubble gum', 'turtle ham') ,
      'bubble gum\ntubble gum\nturble gum\nturtle gum\nturtle hum\nturtle ham\n'
    );

    assert.equal(
      mutateMyStrings('car door', 'cat bore') ,
      'car door\ncat door\ncat boor\ncat borr\ncat bore\n'
    );

    assert.equal(
      mutateMyStrings('right wrong', 'wrong right') ,
      'right wrong\nwight wrong\nwrght wrong\nwroht wrong\nwront wrong\nwrong wrong\nwrong rrong\nwrong riong\nwrong rigng\nwrong righg\nwrong right\n'
    );
  });

});
