def collision(x1, y1, radius1, x2, y2, radius2):
    return (radius1 + radius2) ** 2 > (abs(x1 - x2)) ** 2 + (y1 - y2) ** 2

def test_collision_detected():
    from math import sqrt
    assert collision(1, 1, 1, 1.1, 1.1, 0.1) == True
    assert collision(-1, 1, 10, -10.1, 1.1, 1) == True
    assert collision(-5, 5, 5.0001, 5, -5, 5*sqrt(5)) == True
    assert collision(1, 1, 0.01, 1, 1.1, 0.01) == False
    assert collision(-1, 1, 6, -10.1, 1.1, 1) == False
    assert collision(-5, 5, 5.0001, 5, -5, 4*sqrt(5)) == False
