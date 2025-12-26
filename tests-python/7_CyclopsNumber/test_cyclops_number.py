def cyclops(n):
    str = bin(n)[2::].split('0')
    return len(str) == 2 and len(str[0]) == len(str[1])

def test_cyclops_number():
    assert cyclops(1) == False
    assert cyclops(5) == True
    assert cyclops(3) == False
    assert cyclops(11) == False
    assert cyclops(13) == False
    assert cyclops(23) == False
    assert cyclops(27) == True
    assert cyclops(2015) == True
    assert cyclops(666) == False
    assert cyclops(42) == False