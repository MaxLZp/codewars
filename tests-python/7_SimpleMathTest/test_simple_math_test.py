def is_prime(n):
    if n <= 1: return False
    
    for i in range(2, int(n ** 0.5)+1):
        if n % i == 0: return False
        
    return True

def number_property(n):
    return [is_prime(n), n % 2 == 0, n % 10 == 0]

def test_simple_math_test():
    assert number_property(  0) == [False,  True,  True]
    assert number_property(  1) == [False, False, False]
    assert number_property(  2) == [ True,  True, False]
    assert number_property( -2) == [False,  True, False]
    assert number_property(  5) == [ True, False, False]
    assert number_property( 10) == [False,  True,  True]
    assert number_property(-10) == [False,  True,  True]
    assert number_property( 25) == [False, False, False]
    assert number_property(131) == [ True, False, False]
    assert number_property(341) == [False, False, False]