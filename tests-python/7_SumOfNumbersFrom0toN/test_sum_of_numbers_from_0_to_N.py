def show_sequence(n):
    if n < 0: return f'{n}<0'
    if n == 0: return f'{n}=0'
    
    sum = 0
    seq = '0'
    for num in range(1, n+1):
        seq += f'+{str(num)}'
        sum += num
    
    return f'{seq} = {sum}'


def test_sum_of_numbers_from_0_to_N():
    tests = (
        (6, "0+1+2+3+4+5+6 = 21"),
        (7, "0+1+2+3+4+5+6+7 = 28"),
        (0, "0=0"), 
        (-1, "-1<0"), 
        (-10, "-10<0"),
    )
    
    for inp, exp in tests:
        assert show_sequence(inp) == exp