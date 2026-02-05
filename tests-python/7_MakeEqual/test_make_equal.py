def count(a, t, x):
    if x == 0:
        return a.count(t)
    
    count = 0
    for el in a:
        count += 1 if (el - t) % x == 0 else 0
    return count

def test_make_equal():
    assert count([11,5,3],7,2) == 3
    assert count([11,5,7],7,0) == 1
    assert count([-4,6,8],-7,-3) == 2
