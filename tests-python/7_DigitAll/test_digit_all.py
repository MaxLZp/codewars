def digit_all (x):
    import re
    try:
        return ''.join(re.findall(r'\d', x))
    
        # other
        # return re.sub(r"[\D]",'',x)
    except TypeError:
        return 'Invalid input !'


def test_digit_all():
    assert digit_all("are_you_kidding_me_???") == ''
    assert digit_all("wai8, where are you goin'?") == '8'
    assert digit_all("") == ''
    assert digit_all(['yes','i','am','kidding','you','!']) == 'Invalid input !'

    assert digit_all(False) == 'Invalid input !'
    assert digit_all(None) == 'Invalid input !'
    assert digit_all(True) == 'Invalid input !'
    assert digit_all(1234) == 'Invalid input !'
    assert digit_all(['abcde']) == 'Invalid input !'

    assert digit_all('a1b2c3d4e') == '1234'
    assert digit_all('are_you_kidding_me_???') == ''
    assert digit_all('                     4') == '4'
    assert digit_all('                     ') == ''
