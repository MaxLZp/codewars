def only_one(*args):
    n = 0
    for arg in args:
        n += int(arg)

    return 1 == n

# def only_one(*args):
#     return sum(args) == 1

# def only_one(*args):
#     return args.count(True) == 1


def test_only_one():
    assert only_one() == False
    assert only_one(True, False) == True
    assert only_one(False, False, False) == False
    assert only_one(True, False, False, True) == False