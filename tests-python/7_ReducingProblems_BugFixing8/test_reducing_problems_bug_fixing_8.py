# from functools import reduce

def calculate_total(t1, t2):
    return sum(t1) > sum(t2)

    # or using functools::reduce
    # t1s=reduce(lambda a,b: a+b,t1,0)
    # t2s=reduce(lambda a,b: a+b,t2,0)
    # return t1s>t2s

def test_reducing_problems_bug_fixing_8():
    assert calculate_total([1,2,2],[1,0,0]) == True
    assert calculate_total([6,45,1],[1,55,0]) == False
    assert calculate_total([57,2,1],[]) == True
    assert calculate_total([],[3,4,3]) == False
    assert calculate_total([],[]) == False