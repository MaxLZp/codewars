def one(xs, f): 
    sum = 0
    for x in xs:
        sum += 1 if f(x) else 0
        
    return sum == 1
  
def test_enumerable_magic5_true_for_just_one():
    def do_test(xs, f, expected, fname):
        actual = one(xs, f)
        assert actual == expected
        
    equals_9 = lambda x: x == 9
    less_than_9 = lambda x: x < 9
    greater_than_9 = lambda x: x > 9

    do_test([6, 7, 8, 9, 10, 11], equals_9, True, 'equals_9')
    do_test([6, 7, 8, 9, 10, 11], less_than_9, False, 'less_than_9')
    do_test([6, 7, 8, 9, 10, 11], greater_than_9, False, 'greater_than_9')    