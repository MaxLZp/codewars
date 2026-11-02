def square_area_to_circle(size):
    import math
    return math.pi * (size ** 0.5 / 2) ** 2


def test_circle_area_inside_square():
    import pytest
    assert pytest.approx(7.0685834705770345, 1e-8) == square_area_to_circle(9)
    assert pytest.approx(15.70796326794897, 1e-8) == square_area_to_circle(20)