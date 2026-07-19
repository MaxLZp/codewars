def rank_of_element(arr,i):
    return len([e for e in arr[:i] if e <= arr[i]]) + len([e for e in arr[i+1:] if e < arr[i]])

def test_simple_fun177_rank_of_element():
    assert rank_of_element([2, 1, 2, 1, 2],2) == 3
    assert rank_of_element([2, 1, 2, 2, 2],2) == 2
    assert rank_of_element([3, 2, 3, 4, 1],0) == 2
    assert rank_of_element([3, 2, 3, 4, 1],1) == 1
    assert rank_of_element([3, 2, 3, 4, 1],2) == 3
