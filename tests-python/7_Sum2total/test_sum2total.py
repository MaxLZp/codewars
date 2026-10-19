def total(arr):
    if len(arr) == 1:
        return arr[0]
    
    return total([arr[i-1] + arr[i] for i in range(1, len(arr))])


def test_sum2total():
    assert total([1,2,3,4,5]) == 48
    assert total([1,2,3,4]) == 20
    assert total([1,2,3]) == 8
    assert total([4,4,52,23,32,1,-1]) == 1753
    assert total([4,4,5,-1]) == 30
    assert total([-1,-1,-1]) == -4
    assert total([-1,-1,-10,42,92,1,23,6,-3]) == 9248
    assert total([-1,1,-1,1]) == 0
    assert total([42]) == 42
    assert total([-1,-1,-10,42,92,1,23,6,-3]) == 9248
