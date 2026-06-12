def noonerize(numbers):
    try:
        n001 = f'{numbers[0]}'[0]
        n01n = f'{numbers[0]}'[1:]
        n101 = f'{numbers[1]}'[0]
        n11n = f'{numbers[1]}'[1:]
        return abs(int(n001+n11n) - int(n101+n01n))
    except ValueError:
        return 'invalid array'


def test_noonerize_me():
        assert noonerize([12, 34]) == 18
        assert noonerize([55, 63]) == 12
        assert noonerize([357, 579]) == 178
        assert noonerize([1000000, 9999999]) == 7000001
        assert noonerize([1000000, "hello"]) == "invalid array"
        assert noonerize(["pippi", 9999999]) == "invalid array"
        assert noonerize(["pippi", "hello"]) == "invalid array"
        assert noonerize([1, 1]) == 0
        assert noonerize([1, 0]) == 1
        assert noonerize([0, 1]) == 1
