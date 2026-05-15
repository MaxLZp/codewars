def is_monotone(heights):
    i = 0
    while i < len(heights) - 1:
        if heights[i] > min(heights[i + 1:]):
            return False
        i += 1
    return True

    # Other 1
    # return sorted(heights) == heights
    
    # Other 2
    # for i, item in enumerate(heights):
    #     if i > 0 and heights[i-1] > item: return False
    # return True

  
def test_monotone_travel():
    assert is_monotone(list(range(1, 11))) == True
    assert is_monotone([5,5,5,5,5,5,5]) == True
    assert is_monotone([]) == True
    assert is_monotone([1]) == True

