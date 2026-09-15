def polydivisible(x):
    for i in range(1, len(f'{x}') + 1):
        if int(f'{x}'[:i]) % i != 0: return False
    return True
       

def test_polydivisble_numbers():
    assert polydivisible(1232) == True
    assert polydivisible(123220) == False
    assert polydivisible(0) == True
    assert polydivisible(1) == True
    assert polydivisible(141) == True
    assert polydivisible(1234) == False
    assert polydivisible(21234) == False
    assert polydivisible(81352) == False
    assert polydivisible(987654) == True
    assert polydivisible(1020005) == True
    assert polydivisible(9876545) == True
    assert polydivisible(381654729) == True
    assert polydivisible(1073741823) == False
    