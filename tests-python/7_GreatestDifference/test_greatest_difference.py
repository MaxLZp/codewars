def diff(arr):
    couple = False
    diff = 0
    
    for _str in arr:
        split = _str.split('-')
        _diff = abs(int(split[0]) - int(split[1]))
        if _diff > diff:
            diff = _diff
            couple = _str
    
    return couple

def test_greatest_difference():
    assert diff(['43-45', '1021-55', '000-18888', '92-34', '76-32', '99-1', '1020-54']) == '000-18888'
    assert diff(['1-2','2-4','5-7','8-9','44-45']) == '2-4'
    assert diff(['1-1000','2-1000','100-67','98-45','8-9']) == '1-1000'
    assert diff(['33-33', '77-77']) == False
    assert diff(['23-67','67-23','88-88','45-46']) == '23-67'
    assert diff(['45896-2354','4654-556767','2455-423522','3455-355','34-34','2524522-0']) == '2524522-0'
    assert diff(['1-1', '2-2', '1-0', '77-77']) == '1-0'
    assert diff(['0-0']) == False
    assert diff([]) == False