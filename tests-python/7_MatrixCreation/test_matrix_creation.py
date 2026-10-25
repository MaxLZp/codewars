def get_matrix(n):
    result = []
    for i in range(0, n):
        a = [0] * n
        a[i] = 1
        result.append(a)

    return result


def test_matrix_creation():
    assert get_matrix(0) == []
    assert get_matrix(1) == [[1]]
    assert get_matrix(2) == [[1, 0], [0, 1]]
    assert get_matrix(3) == [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    assert get_matrix(5) == [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]