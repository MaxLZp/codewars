def min_and_max(l, d, x):
    """Other map()"""
    min = max = 0
    for n in range(l, d+1):
        _sum = sum(map(int, f'{n}'))
        if min == 0 and _sum == x: min = n
        if _sum == x: max = n
    
    return [min, max]


# def min_and_max(l, d, x):
#     """My"""
#     min = max = 0
#     for n in range(l, d+1):
#         sum = 0
#         for c in f'{n}': sum += int(c)
#         if min == 0 and sum == x: min = n
#         if sum == x: max = n
    
#     return [min, max]

    
def test_simple_fun296_round_and_round():
    assert min_and_max(500,505,10) == [505, 505]
    assert min_and_max(100,200,10) == [109, 190]
    assert min_and_max(123,456,5) == [131, 410]
    assert min_and_max(99,501,5) == [104, 500]
    assert min_and_max(99,234,1) == [100, 100]
    assert min_and_max(99,234,19) == [199, 199]
    assert min_and_max(99,5001,27) == [999, 4995]
    assert min_and_max(99,5001,28) == [1999, 4996]
    assert min_and_max(2000,7000,3) == [2001, 3000]

