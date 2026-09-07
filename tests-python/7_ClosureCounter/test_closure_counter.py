def counter():
    counter = 0
    
    def fn():
        nonlocal counter
        counter += 1
        return counter 
    
    return fn


def test_closure_counter():

    assert type(counter).__name__ == 'function'

    assert counter()() == 1

    counter_function = counter()
    assert counter_function() == 1
    assert counter_function() == 2

    counter_one = counter()
    counter_two = counter()
    assert counter_one() == 1
    assert counter_one() == 2
    assert counter_two() == 1
    assert counter_two() == 2
