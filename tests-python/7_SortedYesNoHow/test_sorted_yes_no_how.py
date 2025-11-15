def is_sorted_and_how(arr):
    asc = True
    desc = True
    for i in range(1, len(arr)):
       if arr[i] < arr[i-1]:
          asc = False
       if arr[i] > arr[i-1]:
          desc = False
    return 'yes, ascending' if asc else 'yes, descending' if desc else 'no'

    # # Other
    # if arr == sorted(arr):
    #     return 'yes, ascending'
    # elif arr == sorted(arr, reverse=True):
    #     return 'yes, descending'
    # return 'no'

def test_sorted_yes_no_how():
  assert is_sorted_and_how([1, 2]) == 'yes, ascending'
  assert is_sorted_and_how([15, 7, 3, -8]) == 'yes, descending'
  assert is_sorted_and_how([4, 2, 30]) == 'no'