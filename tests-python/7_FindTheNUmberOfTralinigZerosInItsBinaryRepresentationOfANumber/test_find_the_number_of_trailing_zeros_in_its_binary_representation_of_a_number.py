# return the count of trailing number of zeros in a binary form of a number.
# def trailing_zeros(n) ->int:
#     result = 0
#     for c in f'{n:b}'[::-1]:
#         if c != '0':    
#             return result
#         result += 1

#     return 0

def trailing_zeros(n) ->int:
    """Other"""
    return f'{n:b}'[::-1].find('1')


def test_find_the_number_of_trailing_zeros_in_its_binary_representation_of_a_number():
    assert trailing_zeros(32) == 5
    assert trailing_zeros(25) == 0
