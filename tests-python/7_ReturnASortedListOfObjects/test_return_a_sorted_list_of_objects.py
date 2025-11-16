def sort_list(sort_by, lst):
  return sorted(lst, key=lambda item:item[sort_by], reverse=True)
    

def test_return_a_sorted_list_of_objects():
    test_cases = [
    [
    "x", [],[]
    ], [
    "b",
    [
      {"a": 2, "b": 2},
      {"a": 3, "b": 40},
      {"a": 1, "b": 12}
    ], [
      {"a": 3, "b": 40},
      {"a": 1, "b": 12},
      {"a": 2, "b": 2}
    ]
    ], [
    "a",
    [
      {"a": 4, "b": 3},
      {"a": 2, "b": 2},
      {"a": 3, "b": 40},
      {"a": 1, "b": 12}
    ], [
      {"a": 4, "b": 3},
      {"a": 3, "b": 40},
      {"a": 2, "b": 2},
      {"a": 1, "b": 12}
    ]
    ]
    ]
    for sort_key, input_list, expected_result in test_cases:
            assert sort_list(sort_key, input_list) == expected_result