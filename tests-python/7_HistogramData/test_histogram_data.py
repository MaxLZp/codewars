def histogram(values: list[int], bin_width: int) -> list[int]:
    if not values: return []
       
    return [
        # len([n for n in values if i <= n < i + bin_width])
        len([n for n in values if n >= i and n < i + bin_width])
        for i in range(0, max(values) + 1, bin_width)
    ]

# def histogram(values: list[int], bin_width: int) -> list[int]:
#     res = []
#     i = 0

#     while len(values) > 0 and i <= max(values):
#         sa = [n for n in values if n >= i and n < i + bin_width]
#         res.append(len(sa))
#         i += bin_width

#     return res


def test_histogram_data():
    assert histogram([1, 1, 0, 1, 3, 2, 6], 1) == [1, 3, 1, 1, 0, 0, 1]
    assert histogram([1, 1, 0, 1, 3, 2, 6], 2) == [4, 2, 0, 1]
    assert histogram([], 1) == []
    assert histogram([8], 1) == [0, 0, 0, 0, 0, 0, 0, 0, 1]