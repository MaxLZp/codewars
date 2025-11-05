def prev_mult_of_three(n):
    while n > 0:
        if n % 3 == 0:
            return n
        n //= 10
    return None
        

def test_previous_multiple_of_three():
    assert prev_mult_of_three(1) == None
    assert prev_mult_of_three(25) == None
    assert prev_mult_of_three(36) == 36
    assert prev_mult_of_three(1244) == 12
    assert prev_mult_of_three(952406) == 9