def score_test(tests, right, omit, wrong):
    result = 0
    for test in tests:
        result += right if test == 0 else 0
        result += omit if test == 1 else 0
        result += -wrong if test == 2 else 0
    return result      


def test_scoring_tests():
    assert score_test([0, 0, 0, 0, 2, 1, 0], 2, 0, 1) == 9
    assert score_test([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2) == 3
