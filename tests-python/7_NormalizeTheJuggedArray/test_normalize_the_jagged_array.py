# def normalize(arr, fill_value=None):
#     if (len(arr) == 0): return arr
    
#     _len = max([len(sa) for sa in arr])
#     result = []
#     for sa in arr:
#         t = []
#         for i in range(0, len(sa)):
#             t.append(sa[i])
#         for j in range(i, _len - 1):
#             t.append(fill_value)
#         result.append(t)
    
#     return result

'''
Other
Notes to review:
-  default parameter for max(...)
- ['a'] + ['b'] => ['a', 'b']
- ['b'] * 3  => ['b', 'b', 'b']
'''
def normalize(arr, fill_value=None):
    _len = max([len(sa) for sa in arr], default=0)
    return [sa + [fill_value]*(_len - len(sa)) for sa in arr]

def test_normalize_the_jagged_array():
    tests = [
        [[[1, 2, 3], [2]], [[1, 2, 3], [2, None, None]]],
        [[[1, 4, 2, 6, 7, 2], [3, 1, 4], [8, 9, 4, 4, 0, 9, 8]],
             [[1, 4, 2, 6, 7, 2, None], [3, 1, 4, None, None, None, None], [8, 9, 4, 4, 0, 9, 8]]],
        [[[1, 2, 3], [1, 2, 3], [1]],
             [[1, 2, 3], [1, 2, 3], [1, None, None]]],
        [[], []],
    ]
    for input, output in tests:
        assert output == normalize(input)
        
    assert [[1, 2, 3],[1, "abc", "abc"]] == normalize([[1, 2, 3],[1]], 'abc')
        