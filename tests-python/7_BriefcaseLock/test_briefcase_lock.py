def min_turns(current, target):
    # result = 0
    # for i in range(0, len(current)):
    #     result += min(abs(int(current[i]) - int(target[i])), 10 - abs(int(current[i]) - int(target[i])))
        
    # return result
    
    # one-liner for the above
    return sum([min(abs(int(current[i]) - int(target[i])), 10 - abs(int(current[i]) - int(target[i]))) for i in range(0, len(current))])
  
def test_briefcase_lock():
    assert min_turns("4089", "5672") == 9
    assert min_turns("1732", "4444") == 9
    assert min_turns("7109", "2332") == 13
    assert min_turns("2391", "4984") == 10
    assert min_turns("1234", "3456") == 8
    assert min_turns("1111", "1100") == 2
    assert min_turns("1111", "0000") == 4
    assert min_turns("0000", "9999") == 4
