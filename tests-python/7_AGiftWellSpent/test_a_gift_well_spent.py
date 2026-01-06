def buy(x,arr):  
    for i in range(0, len(arr) - 1):
        for j in range(i+1, len(arr)):
            if x == arr[i] + arr[j]: 
                return [i, j]
    return None

    # return next(([i, j] for i, a in enumerate(arr) for j, b in enumerate(arr[i+1:], i+1) if a + b == x), None)
  
def test_a_gift_well_spent():
    assert buy(3, []) == None
    
    assert buy(3, [1]) == None
    
    assert buy(2, [1, 1]) == [0, 1]
    assert buy(3, [1, 1]) == None
    assert buy(5, [5, 2, 3, 4, 5]) == [1, 2]
    assert buy(5, [1, 2, 3, 4, 5]) == [0, 3]
    assert buy(5, [0, 0, 0, 2, 3]) == [3, 4]