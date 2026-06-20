def count_name(arr, name): 
    # return len([n for n in arr if n == name])
    return arr.count(name)


def test_scholar_stem_unit6_baby_count():
    MAINLIST = ["Bob","Ted","Amy","Alice","Bob","Ted","Amy","Ted","Amy","Fred"]
    assert count_name(MAINLIST, "Ted") == 3
    assert count_name(MAINLIST, "Amy") == 3
    assert count_name(MAINLIST, "Bob") == 2