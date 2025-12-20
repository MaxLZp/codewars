def max_tri_sum(numbers):
    return sum(sorted(set(numbers), reverse=True)[:3])

#my
# def max_tri_sum(numbers):
#     numbers = sorted(set(numbers), reverse=True)
#     return numbers[0] + numbers[1] + numbers[2]
    
def test_maximize_triplet_sum():
    assert max_tri_sum([3,2,6,8,2,3]) == 17
    assert max_tri_sum([2,9,13,10,5,2,9,5]) == 32
    assert max_tri_sum([2,1,8,0,6,4,8,6,2,4]) == 18
    assert max_tri_sum([-3,-27,-4,-2,-27,-2]) == -9
    assert max_tri_sum([-14,-12,-7,-42,-809,-14,-12]) == -33
    assert max_tri_sum([-13,-50,57,13,67,-13,57,108,67]) == 232
    assert max_tri_sum([-7,12,-7,29,-5,0,-7,0,0,29]) == 41
    assert max_tri_sum([-2,0,2]) == 0
    assert max_tri_sum([-2,-4,0,-9,2]) == 0
    assert max_tri_sum([-5,-1,-9,0,2]) == 1
