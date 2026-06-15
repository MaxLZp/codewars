def remainder(dividend,divisor):
	return dividend - (divisor * (dividend // divisor))


def test_fint_remainder_without_using_operator():
    assert remainder(3,2) == 1
    assert remainder(19,2) == 1
    assert remainder(10,2) == 0
    assert remainder(34,7) == 6
    assert remainder(27,5) == 2
    