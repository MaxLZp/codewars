def is_multiple(a, b, n):
    # import math
    # t = int((math.floor((a / b) * 10 + 0.5) / 10 ) * 10 % 10)
    t = int((a / b) * 10 + 0.5) % 10
    return t > 0 and (t // n) * n == t


def test_multiple_remainder_of_the_division():
    assert is_multiple(5, 2, 3) == False
    assert is_multiple(5, 3, 4) == False
    assert is_multiple(5, 4, 3) == True
    assert is_multiple(666, 665, 2) == False
    assert is_multiple(3691401, 1892272, 5) == False
