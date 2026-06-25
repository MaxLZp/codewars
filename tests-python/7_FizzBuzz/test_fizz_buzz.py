# def solution(number):
#     result = [0, 0, 0]
#     for i in range(1, number) :
#         if i % 3 == 0 and i % 5 == 0:
#             result[2] += 1
#             continue
#         if i % 3 == 0: result[0] += 1
#         if i % 5 == 0: result[1] += 1
    
#     return result

def solution(number):
    """Other"""
    A = (number - 1) // 3
    B = (number - 1) // 5
    C = (number - 1) // 15    
    return [A - C, B - C, C]


def test_fizz_buzz():
    assert solution(20) == [5, 2, 1]
    assert solution(2) == [0, 0, 0]
    assert solution(14) == [4,2,0]
    assert solution(30) == [8, 4, 1]
    assert solution(141) == [37, 19, 9]

