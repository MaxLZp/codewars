def learn_charitable_game(arr):
    val = sum(arr) / len(arr)
    return val > 0 and val % 1 == 0


def test_simple_fun131_learn_charitable_game():
    assert learn_charitable_game([100, 100, 100, 90, 1, 0, 0]) == False
    assert learn_charitable_game([0, 0, 0, 0]) == False
    assert learn_charitable_game([0, 56, 100]) == True
    assert learn_charitable_game([33, 19, 38, 87, 93, 4]) == False
    assert learn_charitable_game([11]) == True
