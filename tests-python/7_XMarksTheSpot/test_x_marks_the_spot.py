def x_marks_the_spot(mat):
    result = []
    for i, row in enumerate(mat):
        for j,item in enumerate(row):
            if item =='x' and len(result) > 0: return []
            if item =='x': 
                result.append(i)
                result.append(j)
                
    return result


def test_x_marks_the_spot():
    assert x_marks_the_spot([]) == []
        
    assert x_marks_the_spot([['o', 'o'], ['o', 'o']]) == []
        
    assert x_marks_the_spot([['x', 'o'], ['o', 'x']]) == []
        
    assert x_marks_the_spot([['x', 'o'], ['o', 'o']]) == [0, 0]
        
    mat = [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ]
    assert x_marks_the_spot(mat) == [4,6]
