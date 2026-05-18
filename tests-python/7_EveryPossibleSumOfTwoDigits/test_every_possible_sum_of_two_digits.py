def digits(num):
    result = []
    snum = f'{num}'
    
    for i, d in enumerate(snum):
        for j, d2 in enumerate(snum[i+1:]):
            result.append(int(d) + int(d2))
    
    return result

    # Number 2
    # snum = f'{num}'   
    # return [int(d) + int(d2) for i, d in enumerate(snum) for d2 in enumerate(snum[i+1:])]
    
    # Other
    # from itertools import combinations
    # def digits(num):
    #     return [int(a) + int(b) for a, b in combinations(str(num), 2)]

  
def test_every_possible_sum_of_two_digits():
    assert digits(156) == [ 6, 7, 11 ]
    assert digits(81596) == [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]
    assert digits(3852) == [ 11, 8, 5, 13, 10, 7 ]
    assert digits(3264128) == [ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]
    assert digits(999999) == [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]
