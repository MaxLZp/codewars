def status(nums):
    ranks = {}
    for i, num in enumerate(nums):
        rank = i + len([n for n in nums if n < num])
        if not rank in ranks.keys():
            ranks[rank] = []
        ranks[rank].append(num)

    result = []
    for i in sorted(ranks):
        result.extend(ranks[i])
    
    return result
    
    # comprehension syntax
    # return [x for i in sorted(ranks) for x in ranks[i]]
    
    
def test_status_arrays():
    assert status([6,9,3,8,2,3,1]) == [6,3,2,1,9,3,8]
    assert status([5 ,5 ,5 ,8 ,7 ,-2 ,-2 ,-3 ,1 ,9, 8 ,3 ,-3, 4 ,-4 ,6 ]) == [5, -2, -3, 5, -2, 5, 1, -3, -4, 8, 7, 3, 4, 8, 9, 6]
    assert status([14,-3,4,6,9,10,-2,4,0]) == [-3,4,-2,14,6,9,4,0,10]