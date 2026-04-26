def solution(x: float) -> float:
    return round(x, 2)


def test_float_precision():
    assert solution(2.34) == 2.34
    assert solution(5.678) == 5.68