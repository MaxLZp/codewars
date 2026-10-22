def average(scores):
    return round(sum(scores) / len(scores))
  
def test_average_scores():
    assert average([5, 78, 52, 900, 1]) == 207
    assert average([5, 25, 50, 75]) == 39
    assert average([2]) == 2
    assert average([1, 1, 1, 1, 9999]) == 2001
    assert average([0]) == 0
