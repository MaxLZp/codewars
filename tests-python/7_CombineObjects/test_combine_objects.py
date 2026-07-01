def combine(*args):
    result = {}
    
    for obj in args:
        for k in obj.keys():
            if k not in result.keys():
                result[k] = 0
            result[k] += obj[k]
            
    return result


def test_combine_objects():
    objA = { 'a': 10, 'b': 20, 'c': 30 }
    objB = { 'a': 3, 'c': 6, 'd': 3 }
    objC = { 'a': 5, 'd': 11, 'e': 8 }
    objD = { 'c': 3 }
    
    assert combine(objA, objB) == { 'a': 13, 'b': 20, 'c': 36, 'd': 3 }
    assert combine(objA, objC) == { 'a': 15, 'b': 20, 'c': 30, 'd': 11, 'e': 8 }

    assert combine(objA, objB, objC) == { 'a': 18, 'b': 20, 'c': 36, 'd': 14, 'e': 8 }
    assert combine(objA, objC, objD) == { 'a': 15, 'b': 20, 'c': 33, 'd': 11, 'e': 8 }

    assert combine({}, {}, {}) == {}
    assert combine(objA, objC, {}) == { 'a': 15, 'b': 20, 'c': 30, 'd': 11, 'e': 8 }

    assert combine({}) == {}
    assert combine(objA, objA, objA) == { 'a': 30, 'b': 60, 'c': 90}
    assert combine(objD, objD, objD, objD, objD, objD) == { 'c': 18}
    assert combine(objA, {}, objA) == { 'a': 20, 'b': 40, 'c': 60}
