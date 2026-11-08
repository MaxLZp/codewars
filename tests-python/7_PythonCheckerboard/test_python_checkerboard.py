def make_checkered_board(n):
    board = [['X' for x in range(n)] for y in range(n)]
    for row in range(0, n):
        for col in range(0, n):
            if (row+col) % 2:
                board[row][col] = "O"

    for line in board:
        print(line)

    return board


def test_python_checkerboard():
    assert make_checkered_board(5) == [['X', 'O', 'X', 'O', 'X'],
                                        ['O', 'X', 'O', 'X', 'O'],
                                        ['X', 'O', 'X', 'O', 'X'],
                                        ['O', 'X', 'O', 'X', 'O'],
                                        ['X', 'O', 'X', 'O', 'X']]
  