def count_number(n, x):
    return sum(
        1
        for i in range(1, n + 1)
        if x % i == 0 and x // i <= n
    )

def test_simple_fun172_count_number():
    assert count_number(5,5) == 2
    assert count_number(10,5) == 2
    assert count_number(6,12) == 4
    assert count_number(6,169) == 0
    assert count_number(100000,1000000000) == 16