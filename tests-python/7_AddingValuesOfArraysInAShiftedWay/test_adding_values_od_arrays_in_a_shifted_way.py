def sum_arrays(arrays, shift):
    result = [0] * (len(arrays[0]) + shift * (len(arrays) - 1))
    for i, array in enumerate(arrays):
        for j, item in enumerate(array):
            result[j + i * shift] += item
    return result


def test_adding_values_od_arrays_in_a_shifted_way():
    tests = [
        {
            "arrays": [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]],
            "shift": 0,
            "expected": [8, 9, 10, 11, 12, -1]
        },
        {
            "arrays": [[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, 7 ]],
            "shift": 3,
            "expected": [1, 2, 3, 11, 12, 13, 7, 7, 7]
        },
        {
            "arrays": [[1, 2, 3, 4, 5, 6], [7, 7, 7, -7, 7, 7], [1, 1, 1, 1, 1, 1]],
            "shift": 3,
            "expected": [1, 2, 3, 11, 12, 13, -6, 8, 8, 1, 1, 1]
        }
    ]

    for t in tests:
        assert sum_arrays(t['arrays'], t['shift']) == t['expected']
 
