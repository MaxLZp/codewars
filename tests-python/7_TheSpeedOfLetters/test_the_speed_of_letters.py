def speedify(st): 
    result = [' ']*(26+len(st))
    for i, c in enumerate(st):
        result[i + ord(c) - ord('A')] = c

    return ''.join(result).rstrip(' ')


def test_the_speed_of_letters():
    assert speedify("AZ") == "A                         Z"
    assert speedify("ABC") == "A B C"
    assert speedify("ACE") == "A  C  E"
    assert speedify("CBA") == "  A"
    assert speedify("HELLOWORLD") == "     E H    DLL   OLO   R  W"
