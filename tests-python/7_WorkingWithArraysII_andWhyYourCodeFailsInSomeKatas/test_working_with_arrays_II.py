def remove_nth_element(lst, n):
    
    # before
    # lst_copy = lst   
    # after
    lst_copy = lst[:]
    
    del lst_copy[n]
    return lst_copy

    # other
    # return a[:n] + a[n+1:]


def test_working_with_arrays_II():
    assert remove_nth_element([1, 2, 3, 4, 5], 4) == [1, 2, 3, 4]
    assert remove_nth_element([9, 7, 6, 9], 0) == [7, 6, 9]
    assert remove_nth_element([2, 3, 4, 5], 1) == [2, 4, 5]
