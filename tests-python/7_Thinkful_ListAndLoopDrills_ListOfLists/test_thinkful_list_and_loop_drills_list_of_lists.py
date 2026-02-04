import math 

def process_data(data):
    return math.prod([a - b for a, b in data])
    
def test_thinkful_list_and_loop_drills_list_of_lists():
    assert process_data([[2, 5], [3, 4], [8, 7]]) == 3
    assert process_data([[2, 9], [2, 4], [7, 5]]) == 28