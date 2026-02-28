import math

def math_engine(arr):
    if arr is None: return 0
    
    pos = math.prod(num for num in arr if num >= 0)
    neg = sum(num for num in arr if num < 0)
    
    return neg + pos

def test_math_engine():
    assert math_engine([1, 2, 3, -4, -5]) == -3
    assert math_engine([2]) == 2
    assert math_engine([-5]) == -4
    assert math_engine([0, -5]) == -5
    assert math_engine([1, 2, 3]) == 6
    assert math_engine([1, 0, 3, -4, -5]) == -9
    assert math_engine([]) == 1
    assert math_engine(None) == 0
    assert math_engine([0]) == 0
    assert math_engine([1, 2, 3, -2, -4]) == 0
    assert math_engine([-2, -3]) == -4