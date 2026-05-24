def max_gap(numbers):
    gap = 0
    _sorted = sorted(numbers)
    for i in range(1, len(numbers)):
        gap = max(gap, abs(_sorted[i] - _sorted[i-1]))
    
    return gap


def test_maximum_gap_array_series4():
    assert max_gap([13,10,2,9,5]) == 4
    assert max_gap([13,3,5]) == 8
    assert max_gap([24,299,131,14,26,25]) == 168
    assert max_gap([-3,-27,-4,-2]) == 23
    assert max_gap([-7,-42,-809,-14,-12]) == 767
    assert max_gap([12,-5,-7,0,290]) == 278
    assert max_gap([-54,37,0,64,-15,640,0]) == 576
    assert max_gap([130,30,50]) == 80
    assert max_gap([1,1,1]) == 0
    assert max_gap([-1,-1,-1]) == 0    