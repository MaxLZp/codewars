def create_dict(keys, values):
    result = {}
    for i in range(0, len(keys)):
        result[keys[i]] = result[keys[i]] = values[i] if i < len(values) else None
    
    return result

def test_dictionary_from_two_lists():
    tests = {
        0: ((['a', 'b', 'c', 'd'], [1, 2, 3]),{'a': 1, 'b': 2, 'c': 3, 'd': None}),
        1: ((['a', 'b', 'c'], [1, 2, 3, 4]),{'a': 1, 'b': 2, 'c': 3})
    }
    for _, value in tests.items():
        assert create_dict(value[0][0], value[0][1]) == value[1]
