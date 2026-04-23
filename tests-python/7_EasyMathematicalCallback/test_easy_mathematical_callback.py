def process_array(arr, callback):
    return [callback(item) for item in arr]
  
def test_easy_mathematical_callback():
    my_array = [4, 8, 2, 7, 5]
    func = lambda val: val * 2
    my_array = process_array(my_array, func)
    
    assert my_array == [ 8, 16, 4, 14, 10 ]

    
    