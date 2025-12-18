def append_arrays(seq1, seq2): 
    return seq1 + seq2
  
  
def test_array_appender():
    assert append_arrays([1,2], [2,4]) == [1,2,2,4]
    assert append_arrays([1,2],[3,4]) == [1,2,3,4]
    assert append_arrays(['this'],['that']) == ['this','that']
    assert append_arrays(['a','B'],['c','D']) == ['a','B','c','D']
    assert append_arrays([1,2], [1]) == [1,2,1]
