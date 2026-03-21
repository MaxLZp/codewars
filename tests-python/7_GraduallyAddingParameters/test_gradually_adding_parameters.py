def add(*args):
    result = 0
    for i, arg in enumerate(args, 1):
        result += i*arg
        
    return result

    #  other
    # return sum(n * i for i, n in enumerate(args, 1))
  
def test_gradually_adding_parameters():
    assert add() == 0
    assert add(100,200,300) == 1400
    assert add(2) == 2
    assert add(4,-3,-2) == -8
    assert add(-1,-2,-3,-4) == -30