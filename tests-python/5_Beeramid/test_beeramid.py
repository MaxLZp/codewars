def beeramid(bonus, price):
    result = 0
    while bonus > 0:
        bonus -= price * (result + 1)**2
        if bonus >= 0:
            result += 1
    
    return result

def test_beeramid():
    assert beeramid(9, 2) == 1
    assert beeramid(10, 2) == 2
    assert beeramid(11, 2) == 2
    assert beeramid(21, 1.5) == 3
    assert beeramid(454, 5) == 5
    assert beeramid(455, 5) == 6
    assert beeramid(4, 4) == 1
    assert beeramid(3, 4) == 0
    assert beeramid(0, 4) == 0
    assert beeramid(-1, 4) == 0







