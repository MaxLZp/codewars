import pytest


def circle_area(r):
    if r <= 0: raise ValueError()

    return 3.1415 * (r) ** 2


def test_area_of_a_circle():

    def assert_answer(actual, expected):
        assert isinstance(actual, float)
        assert actual == pytest.approx(expected = expected, rel = 0.01)
    
    assert_answer(circle_area(1), 3.141)
    
    assert_answer(circle_area(43.2673),  5881.248)
    assert_answer(circle_area(68     ), 14526.724)
    
    with pytest.raises(ValueError):
        circle_area(0)

    with pytest.raises(ValueError):
        circle_area(-1)
 