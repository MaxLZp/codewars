def match_arrays(v, r):
    return len([el for el in v if el in r])

  
def test_array_comparator():
    assert match_arrays(['Perl','Closure','JavaScript'],['Go', 'C++','Erlang']) == 0
    assert match_arrays(['Erlang','JavaScript'],['Go', 'C++','Python']) == 0
    assert match_arrays([True,3,9,11,15],[True,3,11]) == 3
