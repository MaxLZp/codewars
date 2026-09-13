def matryoshka(_lst):
    lst = sorted(_lst, key=lambda sl: ([max(sl)]), reverse=True)
    for i in range(1, len(lst)):
        if (min(lst[i]) <= min(lst[i-1]) or max(lst[i]) >= max(lst[i-1])): 
            return False
    return True


def test_matryoshka_dolls():
    assert matryoshka([[1, 2, 3, 4, 5, 6, 7, 8], [2, 3, 4, 5, 6, 7], [3, 4, 5, 6], [4, 5]]) == True
    assert matryoshka([[4, 5], [2, 6], [1, 9], [-5, 10, 11]]) == True
    assert matryoshka([[3, 3], [4, 4], [5, 5, 5]]) == False
    assert matryoshka([[1, 1, 1, 1, 2], [3, 2, 5, 0], [-1, 500]]) == True
    assert matryoshka([[1, 8], [2, 3, 4, 5, 6, 7], [3, 6], [4, 5]]) == True
    assert matryoshka([[6, 2], [9, 4]]) == False
    assert matryoshka([[7, 1], [7, 6, 5, 4, 3, 2], [6, 3], [4, 5]]) == False
    assert matryoshka([[1, 5], [2, 6], [3, 7]]) == False
    assert matryoshka([[5, 1], [4, 2], [4, 2]]) == False
    assert matryoshka([[5, 1], [4, 2], [3, 3]]) == True
    assert matryoshka([[5, 1], [4, 2], [3, 3, 3, 3, 3, 3, 3]]) == True
    assert matryoshka([[1, 2, 3, 4], [2, 3, 4]]) == False
    assert matryoshka([[1, 2, 3, 4], [2, 3]]) == True
    assert matryoshka([[1, 50, 100], [3, 25, 75], [10, 40, 50], [25, 45]]) == True
    assert matryoshka([[1, 50, 100], [3, 25, 75], [10, 40, 50], [25, 55]]) == False
    assert matryoshka([[-64, -48], [74, -99, 44, -100, -89], [-12, -88, -82, 68, -36]]) == True
