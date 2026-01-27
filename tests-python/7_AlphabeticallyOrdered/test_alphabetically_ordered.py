def alphabetic(s):
    for i in range(1, len(s)):
        # if ord(s[i]) < ord(s[i-1]):
        if (s[i]) < (s[i-1]):
            return False
    return True
  
def test_alphabetically_ordered():
    assert alphabetic('asd') == False
    assert alphabetic('codewars') == False
    assert alphabetic('door') == True
    assert alphabetic('cell') == True
    assert alphabetic('z') == True
    assert alphabetic('') == True