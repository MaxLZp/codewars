def split_by_mask(strng, mask):
    if len(strng) != sum(mask): return None
    
    result = []
    offset = 0
    for m in mask:
        result.append(strng[offset:offset+m])
        offset += m
    
    return result

def test_split_by_mask():
    assert split_by_mask("", tuple()) == []
    assert split_by_mask('1234567890', (3, 3, 4)) == ['123', '456', '7890']
    assert split_by_mask('codewars', (4, 4)) == ['code', 'wars']
    
    assert split_by_mask('abc', ()) == None