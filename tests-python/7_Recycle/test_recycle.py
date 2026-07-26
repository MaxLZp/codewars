def recycle_me(rubbish):
    count = [0, 0, 0]
    for i, val in enumerate(rubbish):
        idx = 0 if val > 0 else 1 if val < 0 else 2
        count[idx] += 1
    
    return tuple(count) 


def test_recycle():
    assert recycle_me([5, -9, 0, 6, -84, -95, 15]) == (3, 3, 1)
    assert recycle_me([45, -26, -4, -66, -84, -38, 14]) == (2, 5, 0)
