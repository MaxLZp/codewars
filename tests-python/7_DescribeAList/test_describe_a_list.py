def describe_list(lst):
	# if 0 == len(lst):
	# 	return 'empty'
	# if 1 == len(lst):
	# 	return 'singleton'
	# return 'longer'

	return 'empty' if not lst else 'singleton' if len(lst) == 1 else 'longer'

def test_describe_a_list():
	assert describe_list([]) == "empty"
	assert describe_list([1]) == "singleton"
	assert describe_list([1,2,5,4]) == "longer"