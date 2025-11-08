def solve(nums, div):
    return [n + n % div for n in nums]

def test_adding_remainders_to_a_list():
  assert solve([2, 7, 5, 9, 100, 34, 32, 0], 3) == [4, 8, 7, 9, 101, 35, 34, 0]
  assert solve([1000, 999, 998, 997], 5) == [1000, 1003, 1001, 999]
  assert solve([], 2) == []