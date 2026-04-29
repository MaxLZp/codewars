def window(lngth, offst, lst):
    result = []
    i = 0
    while i <= len(lst) - lngth:
        result.append(lst[i:i+lngth])
        i += offst
    return result

    # Other
    # return [lst[i:i+lngth] for i in range(0, len(lst)-lngth+1, offst)]

def test_sliding_windows():
    assert window(2,1,[0,1,2,3,4]) == [ [0,1], [1,2], [2,3], [3,4] ]
    assert window(2,2,[0,1,2,3,4]) == [ [0,1], [2,3] ]
    assert window(2,3,[0,1,2,3,4]) == [ [0,1], [3,4] ]

    assert window(3,1,[0,1,2]) == [ [0,1,2] ]
    assert window(2,1,[0,1,2]) == [ [0,1], [1,2] ]
    assert window(1,1,[0,1,2]) == [ [0], [1], [2] ]
    assert window(0,1,[0,1,2]) == [ [], [], [], [] ]