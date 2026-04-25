def factory(x):
    def _(list):
        return [x * item for item in list]
    return _


def test_first_class_function_factory():
    assert factory(3)([1, 2, 3]) == [3, 6, 9]
    assert factory(5)([1, 2, 3]) == [5, 10, 15]
    assert factory(6)([10, 9, 8, 7]) == [60, 54, 48, 42]
    assert factory(2)([14, 15, 16]) == [28, 30, 32]
    assert factory(1)([847, 948, 34]) == [847, 948, 34]
    assert factory(93)([37, 48, 13]) == [3441, 4464, 1209]
