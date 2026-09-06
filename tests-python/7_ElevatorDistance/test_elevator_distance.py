def elevator_distance(array):
    result = 0
    for i in range(1, len(array)):
        result += abs(array[i] - array[i-1])
    
    return result

  
def test_elevator_distance():
    assert elevator_distance([5,2,8]) == 9
    assert elevator_distance([1,2,3]) == 2
    assert elevator_distance([7,1,7,1]) == 18
    
