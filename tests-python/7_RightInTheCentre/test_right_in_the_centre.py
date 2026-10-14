def is_in_middle(sequence):
    search = 'abc'
    pos = sequence.find(search)
    while pos >= 0:
        if abs(pos - (len(sequence) - pos - len(search))) <= 1:
            return True
        pos = sequence.find(search, pos+1)
        
    return False

  
def test_right_in_the_centre():
    assert is_in_middle("AAabcBB") == True
    assert is_in_middle("AabcBB") == True
    assert is_in_middle("AabcBBB") == False
