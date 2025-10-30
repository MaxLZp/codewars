def stanton_measure(arr):
    return arr.count(arr.count(1))

def test_kata():
    assert stanton_measure([1, 4, 3, 2, 1, 2, 3, 2]) == 3