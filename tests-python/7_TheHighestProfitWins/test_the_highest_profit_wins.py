def min_max(lst):
    return [min(lst), max(lst)]
    
    
def test_that_unites_us():
    assert min_max([1,2,3,4,5]) == [1, 5]
    assert min_max([2334454,5]) == [5, 2334454]