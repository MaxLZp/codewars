def queue(queuers, pos):
    time = 0
    while queuers[pos] > 0:
        for i, val in enumerate(queuers):
            if queuers[i] > 0:
                queuers[i] -= 1
                time += 1
            if queuers[pos] == 0: break
    
    return time

def test_queue_time_counter():
    assert queue([2, 5, 3, 6, 4], 0) == 6
    assert queue([2, 5, 3, 6, 4], 1) == 18
    assert queue([2, 5, 3, 6, 4], 2) == 12
    assert queue([2, 5, 3, 6, 4], 3) == 20
    assert queue([2, 5, 3, 6, 4], 4) == 17