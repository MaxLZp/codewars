def travel(total_time, run_time, rest_time, speed):
    _full_runs = int(total_time / (run_time + rest_time))
    _partial_run_time = min(run_time, total_time - _full_runs * (run_time + rest_time))

    return speed * (_full_runs * run_time + _partial_run_time)


def test_how_far_will_i_go():
    assert travel(500, 60, 45, 14) == 4200
    
    
    assert travel(1000, 10, 127, 14) == 1120
    assert travel(1000, 10, 0, 10) == 10000
    assert travel(25, 50, 120, 18) == 450

    assert travel(35869784, 90, 100, 5) == 84954920
    assert travel(1234567, 4, 3, 11) == 7760148
    assert travel(100000000, 21, 5, 14) == 1130769276

    assert travel(0, 100, 10, 14) == 0
    assert travel(250, 0, 5, 14) == 0
    assert travel(100, 10, 0, 14) == 1400
    assert travel(500, 100, 10, 0) == 0
