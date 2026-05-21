def is_matching(st, st1, st2): 
    # st3 = f'{st1}{st2}'.lower().replace(' ', '')
    # for c in st.lower().replace(' ', ''):
    #     if c not in st3: return False
    #     st3 = st3.replace(c, '', 1)

    # return len(st3) == 0
    
    # My 2
    ast3 = sorted([c for c in f'{st1}{st2}'.lower() if c != ' '])
    ast = sorted([c for c in f'{st}'.lower() if c != ' '])
    return ast == ast3
  
def test_string_matcher():
    assert is_matching("bouh", "0", "buh") == False
    assert is_matching("kitten", "t", "eink") == False
    assert is_matching("mentalist", "l.st", "metan") == False
    assert is_matching("impressionistic", "isis isi", "precomnt") == True
    assert is_matching("email box", "bail", "moxe") == True
    assert is_matching("detail", "tlei", "dai") == False
