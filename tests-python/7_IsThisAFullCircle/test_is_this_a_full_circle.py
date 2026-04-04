def full_cycle(lst):
    visited = [lst[0]]
    for i in range(1, len(lst)):
        if lst[visited[i-1]] in visited: 
            return False
        visited.append(lst[visited[i-1]])
        
    return True

def test_is_this_a_full_circle():
    assert full_cycle([0, 1]) == False
    assert full_cycle([1, 0]) == True
    assert full_cycle([2, 1, 0]) == False
    assert full_cycle([2, 0, 1]) == True
    assert full_cycle([1, 2, 0, 3]) == False
    assert full_cycle([3, 2, 0, 1]) == True
    assert full_cycle([4, 1, 2, 3, 0]) == False
    assert full_cycle([2, 0, 4, 1, 3]) == True
    assert full_cycle([1, 3, 4, 0, 5, 2]) == False
    assert full_cycle([1, 5, 4, 2, 0, 3]) == True
    assert full_cycle([1, 5, 4, 2, 0, 3, 6]) == False
    assert full_cycle([6, 8, 3, 0, 2, 7, 4, 1, 5]) == False
    assert full_cycle([2, 8, 5, 9, 1, 3, 7, 4, 0, 6]) == True
    assert full_cycle([2, 17, 7, 19, 18, 9, 5, 15, 16, 8, 11, 6, 14, 4, 3, 13, 0, 12, 1, 10]) == True
    assert full_cycle([21, 18, 19, 14, 8, 0, 9, 2, 1, 3, 7, 4, 5, 10, 13, 12, 6, 17, 11, 15, 20, 16]) == False