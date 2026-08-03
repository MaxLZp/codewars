def mean_vs_median(numbers):
    mean = sum(numbers) / len(numbers)
    median = sorted(numbers)[len(numbers) // 2]
    if mean == median: return 'same'
    return 'mean' if mean > median else 'median'

def test_mean_vs_median():
    assert mean_vs_median([1, 1, 1]) == "same"
    assert mean_vs_median([1, 2, 37]) == "mean"
    assert mean_vs_median([7, 14, -70]) == "median"
    assert mean_vs_median([-10, 20, 5]) == "same"
