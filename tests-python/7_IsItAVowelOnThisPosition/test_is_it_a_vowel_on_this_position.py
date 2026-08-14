def check_vowel(strng, position):
    if position < 0 or len(strng) <= position: return False
    return strng[position] in 'AEUIOaeuio'


def test_is_it_a_vowel_on_this_position():
    assert check_vowel('cat', 1) == True
    assert check_vowel('cat', 0) == False
    assert check_vowel('cat', 4) == False
    assert check_vowel('Amanda', -2) == False
    assert check_vowel('Amanda', 0) == True
    assert check_vowel('Amanda', 2) == True
    