import math

def furthest_distance(points):
    result = 0
    for i in range(0, len(points)):
        for j in range(i, len(points)):
            result = max(result, math.sqrt(math.pow(points[i][0] - points[j][0], 2) + math.pow(points[i][1] - points[j][1], 2)))
    
    return round(result * 100) / 100

# from itertools import combinations

# def furthestDistance(arr):
#     return round(max( sum((y-x)**2 for x,y in zip(*comb))**.5 for comb in combinations(arr, 2)), 2)

def test_fartest_distance():
    assert furthest_distance([[3,8],[10,4]]) == 8.06
    assert furthest_distance([[1,1], [2,3], [5,5], [4,3], [3,3], [4,1], [2,2]]) == 5.66
    assert furthest_distance([[1,2], [3,8], [4,3]]) == 6.32
    assert furthest_distance([[33,33], [33,33], [33,33], [33,33], [33,33]]) == 0.0