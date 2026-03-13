import math

def smallest_product(a):
    return min([math.prod(sa) for sa in a])

def test_smallest_product():
   assert smallest_product([[3, 2], [1, 2, 1], [7, 8]]) == 2
   assert smallest_product([[10], [3, 0], [-1, -6, 2]]) == 0