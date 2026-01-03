import re

def is_letter(s):
    return bool(re.fullmatch(r"[a-z]", s, re.IGNORECASE))
  
def test_is_it_a_letter():
    assert is_letter("") == False
    assert is_letter("a") == True
    assert is_letter("X") == True
    assert is_letter("7") == False
    assert is_letter("_") == False
    assert is_letter("ab") == False
    assert is_letter("a\n") == False