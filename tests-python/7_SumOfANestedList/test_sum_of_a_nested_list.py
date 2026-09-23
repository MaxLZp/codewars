def sum_nested(lst):
    result = 0
    for i in lst:
        result += sum_nested(i) if isinstance(i, list) else i

    return result


def test_sum_of_a_nested_list():
    assert sum_nested([1]) == 1
    assert sum_nested([1, 2, 3, 4]) == 10
    assert sum_nested(list(range(11))) == 55
        
    assert sum_nested([]) == 0

    assert sum_nested([[1], []]) == 1
    assert sum_nested([[1, 2, 3, 4]]) == 10

    assert sum_nested([[], []]) == 0

    assert sum_nested([1, [1], [[1]], [[[1]]]]) == 4
    assert sum_nested([1, [1], [1, [1]], [1, [1], [1, [1]]]]) == 8

    assert sum_nested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []]) == 0
