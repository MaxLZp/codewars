def sctc(sin):
    result = [round(sin, 2)]
    cos = (1 - sin**2)**0.5
    result.append(round(cos, 2))
    if cos != 0:
        result.append(round(sin / cos, 2))
    if sin != 0:
        result.append(round(cos / sin, 2))
    return result

def test_sine_cosine_and_others():
    assert sctc(1) == [1, 0.0, 0.0]
    assert sctc(1/2) == [0.5, 0.87, 0.58, 1.73]
    assert sctc(3 ** 0.5 / 2) == [0.87, 0.5, 1.73, 0.58]
    assert sctc(2 ** 0.5 / 2) == [0.71, 0.71, 1.0, 1.0]
    assert sctc(0) == [0, 1.0, 0.0]
    assert sctc(0.22) == [0.22, 0.98, 0.23, 4.43]
    assert sctc(0.15) == [0.15, 0.99, 0.15, 6.59]
    assert sctc(0.18) == [0.18, 0.98, 0.18, 5.46]
    assert sctc(0.2) == [0.2, 0.98, 0.2, 4.9]
    assert sctc(0.1) == [0.1, 0.99, 0.1, 9.95]