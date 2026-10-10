def ones_complement(binary_number):
    import re
    return re.sub(r'1|0', lambda c: '1' if c[0] == '0' else '0', binary_number)


def test_ones_complement():
    assert ones_complement("0") == "1"
    assert ones_complement("1") == "0"
    assert ones_complement("01") == "10"
    assert ones_complement("10") == "01"
    assert ones_complement("1101") == "0010"
    