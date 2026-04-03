import re

def replace_all(obj, find, replace):
    return re.sub(find, replace, obj, count=0) if isinstance(obj, str) else [item if item != find else replace for item in obj]
    # return obj.replace(find, replace,) if isinstance(obj, str) else [item if item != find else replace for item in obj]
    

def test_replace_all():
    tests = (
        (([], 1, 2), []),
        (([1, 2, 2], 1, 2), [2, 2, 2]),
        (([1, 1, 2], 1, 2), [2, 2, 2]),
        (([1, 2, 1, 2, 1], 1, 2), [2, 2, 2, 2, 2]),
        (("Hello World", 'o', '0'), "Hell0 W0rld"),
    )

    for t in tests:
        inp, exp = t
        assert replace_all(*inp) == exp
