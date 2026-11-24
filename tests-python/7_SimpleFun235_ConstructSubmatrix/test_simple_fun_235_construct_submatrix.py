def construct_submatrix(matrix, rows_to_delete, cols_to_delete):
    result = []
    for i, r in enumerate(matrix):
        if i in rows_to_delete:
            continue
        new_row = []
        for j, e in enumerate(r):
            if j in cols_to_delete:
                continue
            new_row.append(e)
        result.append(new_row)

    return result


def test_simple_fun_235_construct_submatrix():
    matrix = [
        [1, 0, 0, 2], 
        [0, 5, 0, 1], 
        [0, 0, 3, 5]
    ]
    rows = [1]
    cols = [0, 2]
    output = [
        [0, 2],
        [0, 5]
    ]
    assert construct_submatrix(matrix, rows, cols) == output
    

    matrix = [
        [1, 0, 0, 2], 
        [0, 5, 0, 1], 
        [0, 0, 3, 5]
    ]
    rows = []
    cols = [0]
    output = [
        [0, 0, 2], 
        [5, 0, 1], 
        [0, 3, 5]
    ]
    assert construct_submatrix(matrix, rows, cols) == output


    matrix = [[1]]
    rows = [0]
    cols = [0]
    output = []
    assert construct_submatrix(matrix, rows, cols) == output