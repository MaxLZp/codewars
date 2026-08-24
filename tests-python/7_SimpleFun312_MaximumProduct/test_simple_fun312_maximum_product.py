def maximum_product(arr):
    import math    
    max_num = []
    max_prod = None
    for i, num in enumerate(arr):
        _prod = math.prod(arr[:i] + arr [i+1:])

        if max_prod == None:
            max_prod = _prod
            max_num.append(num)
            continue
        
        if _prod > max_prod:
            max_prod = _prod
            max_num = [num]

        if _prod == max_prod:
            max_num.append(num)

    return min(max_num)

    
def test_simple_fun312_maximum_product():
        assert maximum_product([1, 2, 3]) == 1
        assert maximum_product([-1, 2, -3]) == 2
        assert maximum_product([-1, -2, -3]) == -1
        assert maximum_product([-1, -2, -3, -4]) == -4
        assert maximum_product([0, 1, 2, 3]) == 0
        assert maximum_product([0, -1, -2, -3]) == -3
        assert maximum_product([0, -1, -2, -3, -4]) == 0