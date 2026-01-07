def sum_times_tables(table, a, b):
    _sum = ((a + b) / 2) * (b - a + 1)
    # return sum([t * _sum for t in table])
    # or
    return sum(table) * _sum
  
def test_sum_times_table():
    assert sum_times_tables([2,3],1,3) == 30
    assert sum_times_tables([1,3,5],1,1) == 9
    assert sum_times_tables([1,3,5],1,10) == 495
    assert sum_times_tables([],1,10) == 0
    assert sum_times_tables([1,2,3,4,5,6,7,8,9,10],1,10) == 3025
    assert sum_times_tables([10,9,8,7,6,5,4,3,2,1],1,10) == 3025
    assert sum_times_tables([5,4,7,8,9,6,3,2,10,1],1,10) == 3025
    assert sum_times_tables([-2],-1,3) == -10
    assert sum_times_tables([-2,2],-1,3) == 0
    assert sum_times_tables([-2,3],-1,3) == 5
    assert sum_times_tables([2,-3],-1,3) == -5
    assert sum_times_tables([2,4,7],-100,100) == 0
    assert sum_times_tables([2,4,7],1,100) == 65650
    assert sum_times_tables([2,4,7],1,101) == 66963