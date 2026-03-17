def tetration(x, y):
    return 1 if y == 0 else pow(x, tetration(x, y-1))
    

def test_tetration():
    assert tetration(4,0) == 1
    assert tetration(7,1) == 7
    assert tetration(5,2) == 3125
    assert tetration(2,3) == 16
    assert tetration(3,3) == 7625597484987