def switcheroo(s):
    r = ''
    for c in s:
        match c:
            case 'a' : r += 'b'
            case 'b' : r += 'a'
            case _: r += c

    return r
    # return s.translate(str.maketrans('ab','ba'))

def test_switcheroo():
    assert switcheroo("abc") == "bac"
    assert switcheroo('aaabcccbaaa'), 'bbbacccabbb'
    assert switcheroo('ccccc') == 'ccccc'
    assert switcheroo('abababababababab') == 'babababababababa'
    assert switcheroo('aaaaa') == 'bbbbb'