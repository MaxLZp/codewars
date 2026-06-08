def duplicate_elements(m, n):
    for me in m:
        if me in n: return True
    return False


def test_identical_elements():
    assert duplicate_elements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]) == True
    assert duplicate_elements([9, 8, 7], [8, 1, 3]) == True
    assert duplicate_elements([-2, -4, -6, -8], [-2, -3, -5, -7]) == True
    assert duplicate_elements([-9, -8, -7], [-8, -1, -3]) == True

    assert duplicate_elements([1, 3, 5, 7, 9], [2, 4, 6, 8]) == False
    assert duplicate_elements([9, 8, 7], [6, 5, 4]) == False

    assert duplicate_elements([], [9, 8, 7, 6, 5]) == False
    assert duplicate_elements([9, 8, 7, 6, 5], []) == False
    assert duplicate_elements([], []) == False

