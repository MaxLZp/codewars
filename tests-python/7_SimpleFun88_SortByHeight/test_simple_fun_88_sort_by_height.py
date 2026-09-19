def sort_by_height(a):
    height = sorted([el for el in a if el != -1])
    for i in range(0, len(a)):
        if a[i] == -1:
            height.insert(i, -1)
        
    return height


def test_simple_fun_88_sort_by_height():
    assert sort_by_height([-1, 150, 190, 170, -1, -1, 160, 180]) == [-1, 150, 160, 170, -1, -1, 180, 190]
    assert sort_by_height([-1, -1, -1, -1, -1]) == [-1, -1, -1, -1, -1]
    assert sort_by_height([4, 2, 9, 11, 2, 16]) == [2, 2, 4, 9, 11, 16]
