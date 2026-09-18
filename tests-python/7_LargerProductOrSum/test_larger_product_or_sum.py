def sum_or_product(array, n):
    _sorted = sorted(array)
    _sum = sum(_sorted[-n:])

    # _pdc = 1
    # for i in range(0, n):
    #     _pdc *= _sorted[i]
    
    # from functools import reduce
    # _pdc = reduce(lambda x, y: x*y, _sorted[:n])

    from math import prod
    _pdc = prod(_sorted[:n])
        
    if _sum == _pdc: return 'same'
    return 'sum' if _sum > _pdc else 'product'


def test_larger_product_or_sum():
    assert sum_or_product([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) == "sum"
    assert sum_or_product([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) == "product"
    assert sum_or_product([10, 20, 3, 30, 5, 4], 3) == "same"
    assert sum_or_product([23, 7, 12, 9, 12, 17, 3, 8, 5, 2, 23], 3) == "sum"
    assert sum_or_product([13, 8, 22, 39, 12, 6, 14, 19, 4, 7, 33], 4) == "product"
    assert sum_or_product([-10, 42, 5, -7, 3, 18], 4) == "product"
    assert sum_or_product([-4, -1, 5, -7, -2, 6, 20, 23, 7], 4) == "same"
    assert sum_or_product([-13, 2, -15, 5, -17, 3], 3) == "sum"
    assert sum_or_product([-100, -70, -50, -20, 10, 40, 70, 100], 6) == "product"
    assert sum_or_product([4, 8, 12, 7, 8, -2, 3, -10], 2) == "same"
    