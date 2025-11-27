import re

def is_it_a_num(s: str) -> str:
    s  = re.sub(r"[^\d]", '', s)
    return s if len(s) == 11 and s[0] == '0' else "Not a phone number"

def test_fix_my_phone_numbers():
    assert is_it_a_num("S:)0207ERGQREG88349F82!efRF)") == "02078834982"
    assert is_it_a_num("sjfniebienvr12312312312ehfWh") == "Not a phone number"
    assert is_it_a_num("0192387415456") == "Not a phone number"
    assert is_it_a_num("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165") == "02084564165"
    assert is_it_a_num("stop calling me no I have never been in an accident") == "Not a phone number"