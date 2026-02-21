# from numbers import Number
import numbers

def multiply_and_filter(seq, multiplier): 
    # doesn't work at codewars
    # return [multiplier * num for num in seq if isinstance(num, Number)]
    
    return [multiplier * num for num in seq if isinstance(num, numbers.Real) and not isinstance(num, bool)]

    # Other
    # return [num * multiplier for num in seq if type(num) in (int, float)]


def test_multiply_array_numbers_and_filter_non_numeric():
    multiply_and_filter([1,2,3,4], 1.5) == [1.5, 3, 4.5, 6]
    multiply_and_filter([1,2,3], 0) == [0, 0, 0]
    multiply_and_filter([0,0,0], 2) == [0, 0, 0]
    multiply_and_filter([1, None, lambda x: x, 2.5, 'string', 10, None, {}, []], 3) == [3,7.5,30]
    multiply_and_filter([1, None, lambda x: x, 2.5, 'string', 10, None, {}, [], True, False], 3) == [3,7.5,30]
