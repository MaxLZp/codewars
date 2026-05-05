def base_finder(seq):
    return 1 + max([int(c) for item in seq for c in item])

  
def test_bases_everywhere():
    assert base_finder(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) == 10
    assert base_finder(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']) == 10
    assert base_finder(['1', '2', '3', '4', '5', '6', '10', '11', '12', '13']) == 7
    assert base_finder(['301', '302', '303', '304', '305', '310', '311', '312', '313', '314']) == 6
    assert base_finder(['50', '51', '61', '53', '54', '60', '52', '62', '55', '56']) == 7