def main_diagonal_product(mat):
    prdct = 1
    for i in range(len(mat)):
        prdct *= mat[i][i]
        
    return prdct


def test_product_of_a_main_diagonal_of_a_square_matrix():
    assert main_diagonal_product([[1,0],[0,1]]) == 1
    assert main_diagonal_product([[1,2,3],[4,5,6],[7,8,9]]) == 45
