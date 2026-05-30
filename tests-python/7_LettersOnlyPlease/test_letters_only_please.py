import re

def remove_chars(s):
    return re.sub(r'[^a-zA-Z ]', '', s)


def test_letters_only_please():
    assert remove_chars('co_ol f0un%(c)t-io"n') == "cool function"
    assert remove_chars("test for error!") == "test for error"
    assert remove_chars(".tree1") == 'tree'
    assert remove_chars("that's a pie&ce o_f p#ie!") == 'thats a piece of pie'
