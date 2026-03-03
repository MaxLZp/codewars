def binary_cleaner(seq): 
    res = ([], [])
    for i, val in enumerate(seq):
        res[0].append(val) if val < 2 else res[1].append(i)
    
    return res

def test_not_above_the_one():
    assert binary_cleaner([0,1,2,1,0,2,1,1,1,0,4,5,6,2,1,1,0]) == ( [ 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0 ], [ 2, 5, 10, 11, 12, 13 ] )
    assert binary_cleaner([0,1,1,2,0]) == ( [ 0, 1, 1, 0 ], [ 3 ] )
    assert binary_cleaner([2,2,0]) == ( [ 0 ], [ 0, 1 ] )
    assert binary_cleaner([0,1,2,1,0,2,1,1]) == ( [ 0, 1, 1, 0, 1, 1 ], [ 2, 5 ] )
    assert binary_cleaner([1]) == ( [ 1 ], [] )