def no_repeat(string):
    for i, val in enumerate(string):
        if val not in string[:i]+string[i+1:]:
            return val
    return string[-1]

    # Other
    # return [x for x in string if string.count(x) == 1][0]
  
def test_all_star_code_challenge16():
    assert no_repeat("aabbccdde") == "e"
    assert no_repeat("wxyz") == "w"
    assert no_repeat("testing") == "e"
    assert no_repeat("codewars") == "c"
    assert no_repeat("Testing") == "T"