def matrix_diagonal(arr, value):
    i = value if value > 0 else 0
    j = -value if value < 0 else 0
    sum = 0
    while i < len(arr) and j < len(arr[0]):
            sum += arr[i][j]
            i += 1
            j += 1

    return sum


def test_changable_diagonal():
    assert matrix_diagonal([[1]], 0) == 1
    assert matrix_diagonal([[1, 2], [3, 4]], 1) == 3
    assert matrix_diagonal([[1, 2], [3, 4]], -1) == 2
