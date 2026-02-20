def averages(arr):
    if len(arr) < 2 or not arr: return []
    
    # arr2 = []
    # for i in range(0, len(arr) - 1):
    #     arr2.append((arr[i] + arr[i + 1]) / 2)
    
    # return arr2

    # Other
    return [(arr[i] + arr[i+1]) / 2 for i in range(0, len(arr) - 1)]
    
    
  
def test_average_of_numbers():
    tests = (
        ([2, 2, 2, 2], [2, 2, 2, 2, 2]),
        ([0, 0, 0, 0], [2, -2, 2, -2, 2]),
        ([2, 4, 3, -4.5], [1, 3, 5, 1, -10]),
        ([], [])
    )
    
    for exp, inp in tests:
        assert averages(inp) == exp