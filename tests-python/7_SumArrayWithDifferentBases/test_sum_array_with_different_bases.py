def sum_it_up(numbers_with_bases):
    sum = 0
    for num in numbers_with_bases:
      sum += int(num[0], num[1])
    return sum

def sum_it_up_other(numbers_with_bases):
    return sum(int(num[0], num[1]) for num in numbers_with_bases)

def test_sum_array_with_different_bases():
    assert sum_it_up([["101",2], ["10",8]]) == 13
    assert sum_it_up([["ABC",16], ["11",2]]) == 2751
    assert sum_it_up([["101",16],["7640",8],["1",9]]) == 4258

    assert sum_it_up_other([["101",2], ["10",8]]) == 13
    assert sum_it_up_other([["ABC",16], ["11",2]]) == 2751
    assert sum_it_up_other([["101",16],["7640",8],["1",9]]) == 4258
