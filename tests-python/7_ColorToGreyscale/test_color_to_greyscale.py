def rgb_to_grayscale(color):
    _c = color.replace('#', '')
    _c = round(0.299*int(_c[:2], 16) + 0.587*int(_c[2:4], 16) + 0.114*int(_c[4:], 16))
    return f'#{_c:02X}{_c:02X}{_c:02X}'


def test_color_to_greyscale():
    assert rgb_to_grayscale("#FFFFFF").upper() == '#FFFFFF'
    assert rgb_to_grayscale("#0000FF").upper() == '#1D1D1D'
    assert rgb_to_grayscale("#00FF00").upper() == '#969696'
    assert rgb_to_grayscale("#FF0000").upper() == '#4C4C4C'
    assert rgb_to_grayscale("#000000").upper() == '#000000'
