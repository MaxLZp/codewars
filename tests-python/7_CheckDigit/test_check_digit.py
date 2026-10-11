def check_digit(number, index1, index2, digit):
    return str(digit) in f'{number}'[min(index1, index2):max(index1,index2)+1]


def test_check_digit():
    assert check_digit(1234567, 1, 0, 1) == True
    assert check_digit(1234567, 0, 1, 2) == True
    assert check_digit(67845123654, 4, 2, 4) == True
    assert check_digit(6668844536485, 0, 0, 6) == True
    assert check_digit(9999999999, 2, 5, 1) == False
