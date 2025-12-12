import math

def is_square(arr):
    if len(arr) == 0: return None
    for el in arr:
        if math.sqrt(el) % 1 :
            return False
    return True

def is_square_other(arr):
    if arr:
        return all((e ** 0.5) % 1 == 0 for e in arr)

def test_are_they_squared():
    assert is_square([1, 4, 9, 16, 25, 36]) == True
    assert is_square([1, 2, 3, 4, 5, 6]) == False
    assert is_square([]) == None
    assert is_square([1, 4, 9, 16, 25]) == True
    assert is_square([1, 2, 4, 15]) == False

    assert is_square_other([1, 4, 9, 16, 25, 36]) == True
    assert is_square_other([1, 2, 3, 4, 5, 6]) == False
    assert is_square_other([]) == None
    assert is_square_other([1, 4, 9, 16, 25]) == True
    assert is_square_other([1, 2, 4, 15]) == False