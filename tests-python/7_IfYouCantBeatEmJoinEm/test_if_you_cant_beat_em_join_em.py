def cant_beat_so_join(numbers):
    _sorted = sorted(numbers, key=lambda x: sum(x), reverse=True)
    
    return [el for subarray in _sorted for el in subarray]
    # or
    # return sum(_sorted, [])


def test_if_you_cant_beat_em_join_em():
    # Normal tests
    assert cant_beat_so_join([[1,2], [3,4], [5,6], [7,8], [9]]) == [7, 8, 5, 6, 9, 3, 4, 1, 2]
    assert cant_beat_so_join([[5, 1],[9, 14],[17, 23],[4, 1],[0, 1]]) == [17, 23, 9, 14, 5, 1, 4, 1, 0, 1]
    assert cant_beat_so_join([[13, 37], [43, 17], [2,3], [45,64], [1,9]]) == [45, 64, 43, 17, 13, 37, 1, 9, 2, 3]
    assert cant_beat_so_join([[52,11,33,222], [582,192,442,512,41], [23912], [2314], [2491,2412,84828]]) == [2491, 2412, 84828, 23912, 2314, 582, 192, 442, 512, 41, 52, 11, 33, 222]
    assert cant_beat_so_join([[1,0,1,0,1,0], [0,1,0,0,1,0,0,1], [0], []]) == [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]

    # Test empty lists
    assert cant_beat_so_join([[], [], [], []]) == []
    assert cant_beat_so_join([[], [], [0], []]) == [0]

