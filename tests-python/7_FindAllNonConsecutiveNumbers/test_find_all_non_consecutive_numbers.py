def all_non_consecutive(arr):
    # result = []
    # for i in range(1, len(arr)):
    #     if arr[i] != arr[i-1] + 1:
    #         result.append({'i' : i, 'n' : arr[i]})
        
    # return result
    
    # My Oneliner
    return [ {'i' : i, 'n' : arr[i]} for i in range(1, len(arr)) if arr[i] != arr[i-1] + 1]


def test_find_all_non_consecutive_numbers():
    assert all_non_consecutive([1,2,3,4,6,7,8,10]) == [{'i': 4, 'n': 6}, {'i': 7, 'n': 10}]
