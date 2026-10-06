def point_in_circle(x, y):
    return (x**2 + y**2) ** 0.5 < 1


def test_point_in_a_unit_circle():
    assert point_in_circle(0, 0) == True
    assert point_in_circle(2, 0) == False
    assert point_in_circle(-1.1, 0) == False
    assert point_in_circle(0, 0.9) == True
    assert point_in_circle(1, 0) == False
