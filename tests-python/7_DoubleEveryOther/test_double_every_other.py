def double_every_other(lst):
    return [j*2 if i % 2 else j for i, j in enumerate(lst)]


def test_double_every_other():
	assert double_every_other([1,2,3,4,5]) == [1,4,3,8,5]
	assert double_every_other([1,19,6,2,12,-3]) == [1,38,6,4,12,-6]
	assert double_every_other([-1000,1653,210,0,1]) == [-1000,3306,210,0,1]
