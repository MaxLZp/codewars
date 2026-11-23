def is_triangle(a, b, c):
    sides = sorted([a, b, c])
    return sides[0] > 0 and sides[2] < sides[0] + sides[1]


def test_is_this_a_triangle():
    assert is_triangle(1, 2, 2), True
    assert is_triangle(7, 2, 2) == False
    assert is_triangle(1, 2, 3) == False
    assert is_triangle(1, 3, 2) == False
    assert is_triangle(3, 1, 2) == False
    assert is_triangle(5, 1, 2) == False
    assert is_triangle(1, 2, 5) == False
    assert is_triangle(2, 5, 1) == False
    assert is_triangle(4, 2, 3) == True
    assert is_triangle(5, 1, 5) == True
    assert is_triangle(2, 2, 2) == True
    assert is_triangle(-1, 2, 3) == False
    assert is_triangle(1, -2, 3) == False
    assert is_triangle(1, 2, -3) == False
    assert is_triangle(0, 2, 3) == False