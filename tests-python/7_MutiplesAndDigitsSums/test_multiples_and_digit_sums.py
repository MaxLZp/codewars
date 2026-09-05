def procedure(i):
    result = 0
    for m in range(1, 1 + 100 // i):
        result += sum([int(n) for n in f'{m*i}'])
        
    return result


def test_multiples_and_digit_sums():
    assert procedure(30) == 18
    assert procedure(12) == 72
    assert procedure(49) == 30
    assert procedure(17) == 48
    assert procedure(10) == 46

