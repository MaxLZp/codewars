def diagonal_sum(array):
    result = 0
    for i in range(0, len(array)):
        result += array[i][i]
    return result

def test_find_sum_of_top_left_to_bottom_right_diagonals():
    assert diagonal_sum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9] ]) == 15

    assert diagonal_sum([
        [1, 2],
        [3, 4] ]) == 5

    assert diagonal_sum([
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16] ]) == 34
    