def pattern(n: int) -> str:
    return '\n'.join([f'{i}'*i for i in range(1, n+1, 2)])


def test_complete_the_pattern6_odd_ladder():
    assert pattern(4) == "1\n333"
    assert pattern(1) == "1"
    assert pattern(5) == "1\n333\n55555"
    assert pattern(5) == "1\n333\n55555"
    assert pattern(0) == ""
    assert pattern(-25) == ""

