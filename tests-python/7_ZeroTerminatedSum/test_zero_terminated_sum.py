def largest_sum(s: str):
    sum = 0
    max = sum
    for c in s:
        if c == '0':
            max = max if max > sum else sum
            sum = 0
            continue
        sum += int(c)
    
    return max

def test_zero_terminated_sum():
    assert largest_sum("72102450111111090") == 11
    assert largest_sum("123004560") == 15
    assert largest_sum("0") == 0