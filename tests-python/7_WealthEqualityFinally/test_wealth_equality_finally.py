def redistribute_wealth(wealth):
    distr = sum(wealth) / len(wealth)
    wealth[:] = [distr for _ in wealth]

def test_redistribute_wealth():
    # already equal
    wealth_equal = [5, 5, 5, 5, 5]
    answer = redistribute_wealth(wealth_equal)
    assert answer is None
    assert wealth_equal == [5, 5, 5, 5, 5]

    # unequal
    wealth_unequal = [0, 10]
    answer = redistribute_wealth(wealth_unequal)
    assert answer is None
    assert wealth_unequal == [5, 5]

    # single citizen
    wealth_single = [5]
    answer = redistribute_wealth(wealth_single)
    assert answer is None
    assert wealth_single == [5]

    # floating point result
    wealth_float = [3, 2, 2]
    answer = redistribute_wealth(wealth_float)
    assert answer is None
    assert wealth_float == [2.3333333333333335, 2.3333333333333335, 2.3333333333333335]
