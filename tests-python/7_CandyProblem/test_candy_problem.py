def candies(lst):
    if len(lst) < 2: return -1

    _max = max(lst)
    result = 0
    for i, candies in enumerate(lst):
        result += _max - candies

    return result

    # Other
    # return len(s) * max(s) - sum(s)

def test_candy_problem():
    assert candies([5,8,6,4]) == 9
    assert candies([1,2,4,6]) == 11
    assert candies([1,2]) == 1
    assert candies([4,2]) == 2
    assert candies([1,3,3,7]) == 14
    assert candies([7,7,7,7]) == 0
    assert candies([17,20,50,61,42,44]) == 132
    assert candies([0]) == -1
    assert candies([]) == -1
    assert candies([4]) ==  -1