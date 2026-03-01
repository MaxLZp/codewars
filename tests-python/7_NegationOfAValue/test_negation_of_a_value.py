def negation_value(s: str, val) -> bool:
    return not bool(val) if len(s) % 2 else bool(val)
  
def test_negation_of_a_value():
    assert negation_value("", True) == True
    assert negation_value("", False) == False
    assert negation_value("!", False) == True
    assert negation_value("!", True) == False
    assert negation_value("!!!", []) == True