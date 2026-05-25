def my_add(a, b):
    try:
        return a + b
    except TypeError:
        return None  


def test_thinkful_logic_drills_graceful_addition():
    assert my_add(1, 3.414) -- 4.414
    assert my_add(42, " is the answer.") == None
    assert my_add(10, "2") == None
