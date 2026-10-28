def replicate(times, number):
    if times <= 0: return []
    return [number] + replicate(times - 1, number)
    # or
    #return [number]*times

def test_recursive_replication():
    assert replicate(3,5) == [5, 5, 5]
    assert replicate(5,1) == [1, 1, 1, 1, 1]
    assert replicate(0,12) == []
    assert replicate(-1,12) == []
    assert replicate(8,0) == [0, 0, 0, 0, 0, 0, 0, 0]
