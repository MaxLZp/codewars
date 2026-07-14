def elements_sum(arr, d = 0):
    sum = 0
    for i, _a in enumerate(reversed(arr)):
        sum += _a[i] if len(_a) > i else d

    return sum

# def elements_sum(arr, d = 0):
#     sum = 0
#     i = len(arr) - 1
#     for _a in arr:
#         sum += _a[i] if len(_a) > i else d
#         i-= 1

#     return sum


def test_sub_array_elements_sum():
    elements_sum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]) == 16
    elements_sum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]) == 15
    elements_sum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]) == 7
    elements_sum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []], 5) == 12
    elements_sum([[3, 2], [4], []]) == 0
    