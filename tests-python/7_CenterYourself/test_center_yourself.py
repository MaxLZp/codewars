def center(strng, width, fill=' '):
    if width < len(strng): return strng
    diff = width - len(strng)
    diff2 = int(diff / 2)
    str = f'{fill*diff2}{strng}{fill*diff2}'

    return str if diff % 2 == 0 else f'{fill}{str}'


def test_center_yourself():
    assert center("a", 3) == " a "
    assert center("abc", 10, '_') == "____abc___"
    assert center("abcdefg", 2) == "abcdefg"