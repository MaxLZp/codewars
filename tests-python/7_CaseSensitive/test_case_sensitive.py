import re

def case_sensitive(s):
    caps = re.findall('[A-Z]', s)
    return [False if len(caps) else True, caps]

def test_case_sensitive():
    assert case_sensitive('asd') == [True, []]
    assert case_sensitive('cellS') == [False, ['S']]
    assert case_sensitive('z') == [True, []]
    assert case_sensitive('') == [True, []]