def find_dup(arr):
    return sum(arr) - ((1 + max(arr)) * (len(arr) - 1)) / 2


def test_find_the_duplicated_number_in_a_consecutive_unsorted_list():
    assert find_dup([1,1,2,3]) == 1
    assert find_dup([1,2,2,3]) == 2
    assert find_dup([5,4,3,2,1,1]) == 1
    assert find_dup([1,3,2,5,4,5,7,6]) == 5
    assert find_dup([8,2,6,3,7,2,5,1,4]) == 2