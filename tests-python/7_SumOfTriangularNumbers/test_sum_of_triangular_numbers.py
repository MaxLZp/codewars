def sum_triangular_numbers(n):
    if n < 0: return 0
    sum = 0
    _n = 0
    for i in range(1, n+1):
        _n += i
        sum += _n

    return sum


def test_sum_of_triangular_numbers():
    assert sum_triangular_numbers(6) == 56
    assert sum_triangular_numbers(34) == 7140
    assert sum_triangular_numbers(-291) == 0
    assert sum_triangular_numbers(943) == 140205240
    assert sum_triangular_numbers(-971) == 0
