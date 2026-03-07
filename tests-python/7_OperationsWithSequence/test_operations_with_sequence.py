def calc(arr):
    ar = [i if i <= 0 else i**2 for i in arr]
    ar[2::3] = [i*3 for i in ar[2::3]]
    ar[4::5] = [i*(-1) for i in ar[4::5]]
    
    return sum(ar)

def test_operations_with_sequence():
    assert calc([ 0, 2, 1, -6, -3, 3 ]) == 31
    assert calc([ 0 ]) == 0
    assert calc([ 1, 1, 1, 1, 1 ]) == 5
    assert calc([ 1, 1, -9, 9, 16, -15, -45, -73, 26 ]) == 1665
    assert calc([ 1, -1, 10, -9, 16, 15, 45, -73, -26 ]) == 2584
    assert calc([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]) == 0
    assert calc([ -5, -5, -5, -5, -5, -5, -5 ]) == -45