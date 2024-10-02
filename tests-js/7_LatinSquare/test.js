const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Latin Squares', function () {

	function makeLatinSquare(n) {
		var result = [];
		for (let i = 1; i <= n; i++) {
			var line = [];
			for (let j = i + 1; j <= n; j++) {
				line.push(j);
			}
			for (let j = 1; j <= i; j++) {
				line.push(j);
			}
			result.push(line);
		}

		return result;
	}


	it("Fixed tests", function () {
		for(let i = 1; i <= 3; i++) {
			let userAns = makeLatinSquare(i);
			// console.log(userAns);
			let verify = verifyLatinSquare(userAns, i);
			assert.isTrue(verify[0], `n = ${i} Verifier returned: ${verify[1]}`);
		}
	});

	function verifyLatinSquare(square, m) {
        let n = square.length;
        if (n != m) {
            return [false, "Square is wrong size"]
        }

        //final boolean[][] foundInRow = new boolean[n][n];


        let foundInRow = new Array(n).fill().map(a => new Array(5));
        let foundInCol = new Array(n).fill().map(a => new Array(5));

        for (let row = 0; row < n; row++) {
            if (square[row].length != n) {
                return [false, "Not a square"];
            }
            for (let col = 0; col < n; col++) {
                let value = square[row][col];
                if (!(1 <= value && value <= m)) {
                    return [false, value + " is not between 1 and " + m];
                }
                if (foundInRow[row][value - 1] || foundInCol[col][value - 1]) {
                    return [false, value + " occurs twice in some row or column"];
                } else {
                    foundInRow[row][value - 1] = foundInCol[col][value - 1] = true;
                }
            }
        }

        return [true, ""];
  }

});
