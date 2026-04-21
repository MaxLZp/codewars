def grid_map(inp, op):
    return list(map(lambda row: list(map(op, row)), inp))

    # traditional solution
    # res = []
    # for i in range(0, len(inp)):
    #     row = []
    #     for j in range(0, len(inp[i])):
    #         row.append(op(inp[i][j]))
    #     res.append(row)
    # return res
    
    # Other
    # return [[op(j) for j in i] for i in inp]


def test_map_over_a_list_of_lists():
    num_grid = [[1,2,3,4], [5,6,7,8,9], [0,2,4]]
    char_grid = [['h', 'E', 'l', 'l', 'O'], ['w', 'O', 'r', 'L', 'd']]
  
    assert grid_map(num_grid, lambda x: x + 1) == [[2,3,4,5], [6,7,8,9,10], [1,3,5]]
    assert grid_map(num_grid, lambda x: x * 2) == [[2,4,6,8], [10,12,14,16,18], [0,4,8]]
    assert grid_map(num_grid, lambda x: x ** 2) == [[1,4,9,16],[25,36,49,64,81],[0,4,16]]
    assert grid_map(char_grid, lambda x: x.upper()) ==[['H', 'E', 'L', 'L', 'O'], ['W', 'O', 'R', 'L', 'D']]
    assert grid_map(char_grid, lambda x: x.lower()) ==[['h', 'e', 'l', 'l', 'o'], ['w', 'o', 'r', 'l', 'd']]