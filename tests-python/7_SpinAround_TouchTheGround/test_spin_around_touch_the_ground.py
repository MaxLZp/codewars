def spin_around(lst):
    """Other"""
    lefts = lst.count('left')
    return abs(len(lst) - len(lefts) * 2) // 4


def spin_around(lst):
    """My"""
    total = 0
    for i in lst:
        total += -1 if i == 'left' else 1
    
    return abs(total) // 4
    

def test_spin_around_touch_the_ground():
    assert spin_around(['left', 'right', 'left', 'right']) == 0
    assert spin_around(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']) == 2
    assert spin_around(['left', 'left', 'left', 'left']) == 1
    assert spin_around([]) == 0
    assert spin_around(['left']) == 0
    assert spin_around(['right']) == 0
    assert spin_around(['right', 'right', 'right', 'left', 'right', 'right']) == 1
    assert spin_around(['left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'right', 'right', 'right', 'right', 'left', 'left', 'right', 'right']) == 1
    assert spin_around(['right', 'left', 'left', 'right', 'left', 'left', 'right', 'left', 'right', 'right', 'left', 'left', 'right', 'right', 'right', 'left', 'left', 'right']) == 0
    assert spin_around(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']) == 10
    assert spin_around(['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']) == 10
