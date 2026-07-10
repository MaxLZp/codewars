class List:
    def remove_(self, integer_list, values_list):
        return [el for el in integer_list if el not in values_list]   

def test_remove_all_the_marked_elements_of_a_list():
    l = List()

    integer_list =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
    values_list = [1, 3]
    assert l.remove_(integer_list, values_list) == [2, 2, 4]

    integer_list = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8]
    values_list  = [1, 3, 4, 2]
    assert l.remove_(integer_list, values_list) == [5, 6 ,7 ,8]

    integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3]
    values_list  = [2, 4, 3]
    assert l.remove_(integer_list, values_list) == [8, 7, 6, 5, 1]

    integer_list = [4, 4, 2 , 3]
    values_list  = [2, 2, 4, 3]
    assert l.remove_(integer_list, values_list) == []

    integer_list = []
    values_list  = [2, 2, 4, 3]
    assert l.remove_(integer_list, values_list) == []
