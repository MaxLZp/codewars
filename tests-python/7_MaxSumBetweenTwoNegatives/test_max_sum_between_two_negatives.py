def max_sum_between_two_negatives(arr):
    max = -1
    idx = -1
    for i, val in enumerate(arr):
        if val >= 0: continue
        if idx < 0:
            idx = i
            continue
        csum = sum(arr[idx + 1 : i])
        max = max if csum <= max else csum
        idx = i
        
    return max


def test_max_sum_between_two_negatives():
    assert max_sum_between_two_negatives([-1,6,-2,3,5,-7]) == 8
    assert max_sum_between_two_negatives([5,-1,-2]) == 0
    assert max_sum_between_two_negatives([1,-2]) == -1
        