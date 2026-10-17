def pluck(objs, name):
    return [obj.get(name, None) for obj in objs]
      
def test_pluck():
    objs = [{'a':1, 'b':2, 'c': 3}, {'a':4, 'b':5, 'c': 6}, {'a':7, 'b':8, 'c': 9}, {'a':10, 'b':11}]

    assert pluck(objs, 'a') == [1,4,7,10]
    assert pluck(objs, 'b') == [2,5,8,11]
    assert pluck(objs, 'c') == [3,6,9,None]
