import math

def points(n):
    result = 0
    for i in range(1, n+1):
        for j in range(0, n+1):
            result += 1 if n >= math.sqrt(i*i + j*j) else 0
    
    return 4*(result) + 1

def test_point_in_the_circle():
    assert points(1) == 5
    assert points(2) == 13
    assert points(3) == 29
    assert points(5) == 81
    assert points(1000) == 3141549