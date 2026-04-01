def sum_factorial(lst):
    sum = 0
    fact = 1
    for i in range(1, max(lst)+1):
        fact *= i
        if i in lst:
            sum += fact
            
    return sum

def test_sum_factorial():
    assert sum_factorial([4,6]) == 744
    assert sum_factorial([5,4,1]) == 145