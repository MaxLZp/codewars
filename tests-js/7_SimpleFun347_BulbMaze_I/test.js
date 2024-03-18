const {strictEqual} = require('chai').assert;

function bulbMaze(maze){
  return [...maze].every((v, i, a) => {
    return (i%2 == 0)
        ? (v == 'x') || (v == ' ')
        : (v == 'o') || (v == ' ')
    ;
  });
}

function doTest(maze, expected) {
	const actual = bulbMaze(maze);
	strictEqual(actual, expected, `for maze = "${maze}"\n`);
}

describe('Kyu 7: Simple Fun #347: Bulb Maze I', function () {

  it("It should works for basic tests.", function(){

    doTest("xo oxox", true);
		doTest("xo  oxox", false);
		doTest("xo ox xo", true);
		doTest("xooxxo", false);
		doTest("xxxxxx", false);
		doTest("oooooo", false);
		doTest("      ", true);
		doTest(" ox", true);
		doTest("xo", true);

  });

});
