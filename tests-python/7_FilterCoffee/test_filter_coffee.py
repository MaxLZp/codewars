def search(budget, prices):
    return ','.join(f'{price}' for price in sorted(price for price in prices if price <= budget))


def test_filter_coffee():
    CASES = [
        (3, [6, 1, 2, 9, 2], "1,2,2"),
        (14, [7, 3, 23, 9, 14, 20, 7], "3,7,7,9,14"),
        (0, [6, 1, 2, 9, 2], ""),
        (10, [], ""),
        (10, [0, 0, 0], "0,0,0"),
        (0, [0, 0, 0], "0,0,0"),
        (24, [24, 0, 100, 2, 5], "0,2,5,24"),
        (24, [2.7, 0, 100.9, 1, 5.5], "0,1,2.7,5.5"),
        (-1, [1, 2, 3, 4], ""),
        (-1, [-1, 0, 1, 2, 3, 4], "-1"),
        (14, [17, 33, 23, 19, 19, 20, 17], ""),
        (14, [13, 15, 14, 14, 15, 13], "13,13,14,14"),
    ]
    for budget, prices, expected in CASES:
        assert search(budget, prices) == expected
