def get_socks(name, socks):
    _result = []
    for i, sock in enumerate(socks):
        if name == 'Punky' and sock not in _result:
            _result.append(sock)
        if name == 'Henry' and sock in socks[i+1:]:
            _result.append(sock)
            _result.append(sock)

        if len(_result) == 2: 
            return _result
        
    return []


def test_80s_kids3_punky_brewesters_socks():
    assert get_socks('Punky',['pink','argyle','argyle']) == ['pink','argyle']
    assert get_socks('Henry',['red','blue','blue','green']) == ['blue','blue']
    assert get_socks('Punky',['pink','pink','pink','pink']) == []
    assert get_socks('Punky',['blue','blue','blue','green','green']) == ['blue','green']
    assert get_socks('Henry',['green','blue','pink','argyle']) == []
    assert get_socks('Henry',['argyle','green','dirty sock','argyle']) == ['argyle','argyle']
    assert get_socks('Henry',['green']) == []
    assert get_socks('Punky',['green']) == []
    assert get_socks('Henry',[]) == []
    assert get_socks('Punky',[]) == []

