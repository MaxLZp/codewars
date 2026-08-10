def invite_more_women(arr):
    return sum(arr) > 0


def test_simple_fun152_invite_more_women():
    assert invite_more_women([1, -1, 1]) == True
    assert invite_more_women([-1, -1, -1]) == False
    assert invite_more_women([1, -1]) == False
    assert invite_more_women([1, 1, 1]) == True
