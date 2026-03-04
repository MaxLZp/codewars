def is_bouncy(number):
    _str = str(number)
    pos = neg = 0
    for i in range(1, len(_str)):
        if _str[i-1] > _str[i]: pos += 1
        elif _str[i-1] < _str[i]: neg += 1
        
    return pos > 0 and neg > 0

    # Other
    # return sorted(str(n)) != list(str(n)) and sorted(str(n)) != list(str(n))[::-1]
  
def test_bouncy_numbers():
    assert is_bouncy(0) == False
    assert is_bouncy(99) == False
    assert is_bouncy(101) == True
    assert is_bouncy(120) == True
    assert is_bouncy(122) == False
    assert is_bouncy(221) == False
    
    assert is_bouncy(2379) == False
    assert is_bouncy(29340) == True
    assert is_bouncy(234689) == False
    assert is_bouncy(98874) == False
    assert is_bouncy(92722983) == True
    assert is_bouncy(129347924210) == True
    
    assert is_bouncy(11076073230178755589) == True