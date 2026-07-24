def sum_and_multiply(sum, multiply):
    for x in range(sum):
        if x * (sum - x) == multiply: return [x, sum - x]
    return None


def test_sum_and_multiply():
    assert sum_and_multiply(12, 36) == [6, 6]
    assert sum_and_multiply(6, 9) == [3, 3]
    assert sum_and_multiply(200, 8458) == None
    assert sum_and_multiply(50, 0) == [0, 50]
