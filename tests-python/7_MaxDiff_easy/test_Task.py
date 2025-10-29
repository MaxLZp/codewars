def test_Task():
    assert max_diff([0, 1, 2, 3, 4, 5, 6]) == 6
    assert max_diff([-0, 1, 2, -3, 4, 5, -6]) == 11
    assert max_diff([0, 1, 2, 3, 4, 5, 16]) == 16
    assert max_diff([16]) == 0
    assert max_diff([]) == 0

def max_diff(lst):
    return 0 if len(lst) < 2 else max(lst) - min(lst)