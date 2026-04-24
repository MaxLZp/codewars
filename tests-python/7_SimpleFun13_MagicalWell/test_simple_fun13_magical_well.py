def magical_well(a, b, n):
    result = 0
    for i in range(0, n):
        result += (a + i) * (b + i)
        
    return result

def test_simple_fun13_magical_well():
    assert magical_well(1,2,2) == 8
    assert magical_well(1,1,1) == 1
    assert magical_well(6,5,3) == 128