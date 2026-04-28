def who_is_serving(current_round: int) -> int:
    return 1 if ((current_round + 1) // 2) % 2 == 1 else 2
    # Other
    # return current_round - 1 & 2 or 1

def test_table_tennis_whos_serving():
    assert who_is_serving(1) == 1
    assert who_is_serving(2) == 1
    assert who_is_serving(3) == 2
    assert who_is_serving(4) == 2
    assert who_is_serving(5) == 1
    assert who_is_serving(6) == 1
    assert who_is_serving(7) == 2
    assert who_is_serving(8) == 2
    assert who_is_serving(9) == 1
    assert who_is_serving(10) == 1
