import re

def capitals_first(text):
    w = text.split(' ')
    c = [_w for _w in w if _w[0].isupper()]
    s = [_w for _w in w if _w[0].islower()]
    
    # my
    # c = [_w for _w in w if re.match(r"[A-Z]", _w)]
    # s = [_w for _w in w if re.match(r"[a-z]", _w)]
    
    return ' '.join(c+s) 

def test_capitals_first():
    assert capitals_first("sense Does to That Make you?") == "Does That Make sense to you?"
    assert capitals_first("hey You, Sort me Already") == "You, Sort Already hey me"
    assert capitals_first("sense Does to That Make you?") == "Does That Make sense to you?"
    assert capitals_first("i First need Thing In coffee The Morning") == "First Thing In The Morning i need coffee"
    assert capitals_first("123 baby You and Me") == "You Me baby and"
    assert capitals_first("Life gets Sometimes pretty !Hard") == "Life Sometimes gets pretty"