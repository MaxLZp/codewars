def grid_index(grid, indexes):
    l = len(grid)
    return ''.join(grid[(i-1) // l][(i-1) % l] for i in indexes)


def test_grid_index():
    results1 = grid_index([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
    assert results1 =='myexample'

    results2 = grid_index([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
    assert results2 =='mam'

    results3 = grid_index([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
    assert results3 =='mepl'

    results4 = grid_index([['h', 'e', 'l', 'l'], ['o', 'c', 'o', 'd'], ['e', 'w', 'a', 'r'], ['r', 'i', 'o', 'r']], [5, 7, 9, 3, 6, 6, 8, 8, 16, 13])
    assert results4 =='ooelccddrr'
