def min_min_max(arr):
    _min = _abs = min(arr)
    _max = max(arr)
    while _abs in arr:
      _abs += 1
    return [_min, _abs, _max]
  
def test_min_max_min():
    assert min_min_max([-1, 4, 5, -23, 24]) == [-23, -22, 24]
    assert min_min_max([1, 3, -3, -2, 8, -1]) == [-3, 0, 8]
    assert min_min_max([2, -4, 8, -5, 9, 7]) == [-5, -3, 9]

