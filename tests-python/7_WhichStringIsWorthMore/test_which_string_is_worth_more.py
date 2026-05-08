def highest_value(a, b):
    return a if sum([ord(ai) for ai in a]) >= sum([ord(bi) for bi in b]) else b


def test_which_string_is_worth_more():
    assert highest_value("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567") == "KkLlMmNnOoPp4567"
