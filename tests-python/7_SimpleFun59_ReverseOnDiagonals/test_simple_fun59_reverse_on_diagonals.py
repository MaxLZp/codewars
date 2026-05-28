def reverse_on_diagonals(matrix):
    _len = len(matrix)
    for i in range(0, _len // 2):
        matrix[i][i], matrix[_len - 1 - i][_len - 1 - i] = matrix[_len - 1 - i][_len - 1 - i], matrix[i][i]
        matrix[i][_len - 1 - i], matrix[_len - 1 - i][i] = matrix[_len - 1 - i][i], matrix[i][_len - 1 - i]

        # Other
        # j = -(1 + i)
        # matrix[i][i], matrix[j][j] = matrix[j][j], matrix[i][i]
        # matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
 
        
    return matrix

def test_simple_fun59_reverse_on_diagonals():
    assert reverse_on_diagonals([[1,2,3], [4,5,6], [7,8,9]]) == [[9,2,7], [4,5,6], [3,8,1]]
    assert reverse_on_diagonals([[239]]) == [[239]]
    assert reverse_on_diagonals([[1,10], [100,1000]]) == [[1000,100], [10,1]]
    assert reverse_on_diagonals([[43,455,32,103], [102,988,298,981], [309,21,53,64], [2,22,35,291]]) == [[291,455,32,2], [102,53,21,981], [309,298,988,64], [103,22,35,43]]
