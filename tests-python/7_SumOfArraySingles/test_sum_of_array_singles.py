def test_sum_of_array_singles():
    assert repeats([4,5,7,5,4,8]) == 15
    assert repeats([9, 10, 19, 13, 19, 13]) == 19
    assert repeats([16, 0, 11, 4, 8, 16, 0, 11]) == 12
    assert repeats([5, 17, 18, 11, 13, 18, 11, 13]) == 22
    assert repeats([5, 10, 19, 13, 10, 13]) == 24

    assert repeats_other([4,5,7,5,4,8]) == 15
    assert repeats_other([9, 10, 19, 13, 19, 13]) == 19
    assert repeats_other([16, 0, 11, 4, 8, 16, 0, 11]) == 12
    assert repeats_other([5, 17, 18, 11, 13, 18, 11, 13]) == 22
    assert repeats_other([5, 10, 19, 13, 10, 13]) == 24

def repeats(arr):
    sum = 0
    for el in arr:
        if arr.index(el) == len(arr) - 1 - list(reversed(arr)).index(el):
            sum += el
    return sum

def repeats_other(arr):
    return sum(n for n in arr if arr.count(n) == 1)