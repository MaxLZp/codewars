def get_a_down_arrow_of(n):
    result = []
    m = n
    while m > 0:
        t1 = [str(i % 10) for i in list(range(1, m))]
        t =  ' '*(n-m) + ''.join(t1) + str(m % 10) + ''.join(t1[::-1])
        result.append(f"{t}")
        m -= 1
        
    return "\n".join(result)

def test_down_arrow_with_numbers():
    
	assert get_a_down_arrow_of(10) == "1234567890987654321\n 12345678987654321\n  123456787654321\n   1234567654321\n    12345654321\n     123454321\n      1234321\n       12321\n        121\n         1"
	assert get_a_down_arrow_of(0) == ""
	assert get_a_down_arrow_of(-5) == ""
	assert get_a_down_arrow_of(3) == "12321\n 121\n  1"
	assert get_a_down_arrow_of(5) == "123454321\n 1234321\n  12321\n   121\n    1"

