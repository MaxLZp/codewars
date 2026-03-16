def digit_multiplication(expression):
    result = 0
    current = 1
    
    for n in expression[::-1]:
        if n == '+':
            result += int(current)
            current = 1
        elif n == '-':
            result -= int(current)
            current = 1
        else:
            current *= int(n)
    result += int(current)
    
    return result

def test_multiply_adjacent_digits():
    assert digit_multiplication('10000345+77-2') == 47
    assert digit_multiplication('12345-11989+1231111') == -522
    assert digit_multiplication('2395') == 270
    assert digit_multiplication('3434343-12121212+4949494-122') == 191788
    assert digit_multiplication('13579+9+9+9-11') == 971
    assert digit_multiplication('6-3-3-3-4') == -7
    assert digit_multiplication('355+43') == 87
