def convert(st):
    return st.replace('o', 'u').replace('a', 'o')
    
    # other
    # return s.translate(str.maketrans('ao', 'ou'))
  
def test_alien_accent():
    assert convert('codewars') =='cudewors'
    assert convert('hello') =='hellu'