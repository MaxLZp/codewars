def hex_word_sum(s):
    result = 0
    for h in s.replace('S', '5').replace('O', '0').split(' '):
        try:
            result += int(h, 16)
        except ValueError:
            result += 0
    return result


def test_hex_word_sum():
    assert hex_word_sum('DEFACE') == 14613198
    assert hex_word_sum('SAFE') == 23294
    assert hex_word_sum('CODE') == 49374
    assert hex_word_sum('BUGS') == 0
    assert hex_word_sum('') == 0
    assert hex_word_sum('DO YOU SEE THAT BEE DRINKING DECAF COFFEE') == 13565769
    assert hex_word_sum('ASSESS ANY BAD CODE AND TRY AGAIN') == 10889952