def absent_vowel(x):
    for i, c in enumerate('aeiou'):
        if c not in x.lower(): return i

def test_absent_vowel():
    assert absent_vowel("John Doe hs seven red pples under his bsket") == 0
    assert absent_vowel("Bb Smith sent us six neatly arranged range bicycles") == 3
