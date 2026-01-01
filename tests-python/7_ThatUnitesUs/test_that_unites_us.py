def that_unites_us(array1, array2, n):
    return sorted(set(array1 + array2))[:n]
    
    
def test_that_unites_us():
    assert that_unites_us(['a', 'c', 'z'], ['b', 'f', 'z'], 3) == ['a', 'b', 'c']
    assert that_unites_us(['f', 'g', 'z'], ['c', 'f', 'g'], 3) == ['c', 'f', 'g']
    assert that_unites_us(['f', 'g', 'z'], ['c', 'f', 'g'], 2) == ['c', 'f']