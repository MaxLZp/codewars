def alt_or(lst):
    return None if len(lst) == 0 else len([el for el in lst if el]) > 0

  
def test_alternate_logic():
    assert alt_or([]) == None
    assert alt_or([False, False, False, False, False, False]) == False
    assert alt_or([False, False, False, False, False, True]) == True
    assert alt_or([False, False, False, False, True, False]) == True
    assert alt_or([False, False, False, False, True, True]) == True
    assert alt_or([False, False, False, True, False, False]) == True
    assert alt_or([False, False, False, True, False, True]) == True
    assert alt_or([False, False, False, True, True, False]) == True
    assert alt_or([False, False, False, True, True, True]) == True
    assert alt_or([False, False, True, False, False, False]) == True
    assert alt_or([False, False, True, False, False, True]) == True
    assert alt_or([False, False, False, False]) == False
    assert alt_or([False, False, False]) == False
    assert alt_or([False, False]) == False
    assert alt_or([False]) == False
    