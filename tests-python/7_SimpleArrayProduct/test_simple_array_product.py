import math
import itertools

def solve(arr):
    # combined = [[]]
    # for item in arr:
    #     res = []
    #     for combItem in combined:
    #         for subItem in item:
    #             res.append(combItem + [subItem])
    #     combined = res
    
    # return max(math.prod(item) for item in combined)
    
    # or
    return max(math.prod(item) for item in list(itertools.product(*arr)))
                
        

def test_simple_array_product():
    assert solve([[1, 2],[3, 4]]) == 8
    assert solve([[10,-15],[-1,-3]]) == 45
    assert solve([[-1,2,-3,4],[1,-2,3,-4]]) == 12
    assert solve([[-11,-6],[-20,-20],[18,-4],[-20, 1]]) == 17600
    assert solve([[14,2],[0,-16],[-12,-16]]) == 3584
    assert solve([[-3,-4],[1,2,-3]]) == 12