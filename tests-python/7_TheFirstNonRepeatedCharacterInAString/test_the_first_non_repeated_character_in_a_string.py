def first_non_repeated(s):
    for c in s:
        if s.count(c) == 1:
            return c
        
    return None


def test_the_first_non_repeated_character_in_a_string():
    assert first_non_repeated("test") == 'e'
    assert first_non_repeated("teeter") == 'r'
    assert first_non_repeated("1122321235121222") == '5'
    assert first_non_repeated("aabbcc") == None