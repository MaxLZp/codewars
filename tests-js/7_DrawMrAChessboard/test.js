const assert = require("assert");

describe('Kyu 7: Draw me a chessboard', function () {

  function chessBoard(rows, columns) {
    let board = [];
    for (let i = 0; i < rows; i++) {
      let line = [];
      for (let j = 0; j < columns; j++) {
        line.push((i + j) % 2 == 0 ? 'O' : 'X');
      }
      board.push(line);
    }

    return board;
  }

  it('should have correct number of rows and columns', function() {
    for (let i=0; i<4; i++) {
      let rows = Math.floor(Math.random() * 20 + 1);
      let columns = Math.floor(Math.random() * 20 + 1);

      assert.equal(chessBoard(rows, columns).length, rows,
        'make sure the board has the correct number of rows');
      assert.equal(chessBoard(rows, columns)[0].length, columns,
        'make sure the board has the correct number of columns');
    }
  });

  it("O's and X's should alternate correctly", function() {

    for (let i=0; i<3; i++) {

      let rows = Math.floor(Math.random() * 10 + 2);
      let columns = Math.floor(Math.random() * 10 + 2);
      console.log(rows + " - rows, ",columns + " - columns");
      for (let j=0; j<rows; j+=2) {
        assert.equal(chessBoard(rows, columns)[j][0], 'O');
        if (j+1 < rows) assert.equal(chessBoard(rows, columns)[j+1][0], 'X');
      }
    }
  });

});
