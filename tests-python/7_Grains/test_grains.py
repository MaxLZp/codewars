def square(number):
    return 2 ** (number - 1)


def test_grains():
    assert square(1) == 1
    assert square(3) == 4
    assert square(4) == 8
    assert square(16) == 32768
    assert square(32) == 2147483648

