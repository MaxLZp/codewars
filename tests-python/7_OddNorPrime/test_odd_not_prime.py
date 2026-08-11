def is_prime(n):
    import math
    if n < 2: return False
    for i in range(2, math.isqrt(n) + 1):
        if n % i == 0: return False
    return True


def odd_not_prime(n):
    return len([num for num in range(1, n + 1) if num % 2 == 1 and not is_prime(num)])


def test_odd_not_prime():
    assert odd_not_prime(5) == 1
    assert odd_not_prime(10) == 2
    assert odd_not_prime(99) == 26