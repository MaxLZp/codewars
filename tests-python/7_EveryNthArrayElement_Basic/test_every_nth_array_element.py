def every(array, interval = 1, start_index = 0):
    result = []
    while start_index < len(array):
        result.append(array[start_index])
        start_index += interval
        
    return result
  
def test_every_nth_array_element():
    subject = [0,1,2,3,4]
    

    assert every(subject) == [0,1,2,3,4]
    
    assert every(subject, 1) == [0,1,2,3,4]
    assert every(subject, 2) == [0,2,4]
    assert every(subject, 3) == [0,3]
    assert every(subject, 4) == [0,4]
    assert every(subject, 5) == [0]

    assert every(subject, 1, 1) == [1,2,3,4]
    assert every(subject, 2, 1) == [1,3]
    assert every(subject, 3, 1) == [1,4]
    assert every(subject, 4, 1) == [1]
    assert every(subject, 5, 1) == [1]

    assert every(subject) == [0,1,2,3,4]
    assert every(subject, 1) == [0,1,2,3,4]
    assert every(subject, 2) == [0,2,4]
    assert every(subject, 3) == [0,3]
    assert every(subject, 1, 3) == [3,4]
    assert every(subject, 3, 1) == [1,4]
    assert every(subject, 3, 4),[4]

    subject2 = ['t', 'e', 's', 't']
    assert every(subject2) == ['t', 'e', 's', 't']
    assert every(subject2, 2) == ['t', 's']
    assert every(subject2, 2, 1) == ['e', 't']

    subject3 = [None,1,['two'],'three',{ 4 : 'IV' }]
    assert every(subject3, 1), subject3
    assert every(subject3, 2, 2) == [['two'], {4 : 'IV' }]
    assert every([None] * 5,2) == [None] * 3