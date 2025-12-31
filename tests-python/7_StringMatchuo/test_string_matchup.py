def solve(a,b):
    # return [len([ae for ae in a if ae == be]) for be in b]
    
    # other
    return [a.count(be) for be in b]
  
def test_string_matchup():
    assert solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']) == [2, 1, 0]
    assert solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']) == [2, 1, 2]
    assert solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']) == [2, 0, 1]