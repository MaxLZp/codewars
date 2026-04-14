def say_me_operations(string_numbers):
    numbers = [int(num) for num in string_numbers.split(' ')]
    result = []
    for i in range(2, len(numbers)):
        if numbers[i] == numbers[i - 2] + numbers[i - 1]: result.append('addition')
        elif numbers[i] == numbers[i - 2] - numbers[i - 1]: result.append('subtraction')
        elif numbers[i] == numbers[i - 2] * numbers[i - 1]: result.append('multiplication')
        elif numbers[i] == numbers[i - 2] // numbers[i - 1]: result.append('division')
    
    return ', '.join(result)


def test_say_me_please_operations():
    assert say_me_operations("1 2 3 5 8") == "addition, addition, addition"
    assert say_me_operations("9 4 5 20 25") == "subtraction, multiplication, addition"
    assert say_me_operations("10 2 5 -3 -15 12") == "division, subtraction, multiplication, subtraction"
    assert say_me_operations("2 2 4") == "addition"
    