def product(st):
    return st.count('!') * st.count('?')

  
def test_exclamation_mark_series13():
    assert product('') == 0
    assert product('!') == 0
    assert product('!!??!!') == 8
