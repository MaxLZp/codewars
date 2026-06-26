def destroyer(input_sets):
    import re
    _set = set.union(*input_sets)
    return re.sub(
        f'[{"".join(_set)}]', 
        '_', 
        "a b c d e f g h i j k l m n o p q r s t u v w x y z"
    )

  
def test_string_destroyer():
    input_sets = ({'A', 'b'}, {'C', 'd'})
    assert destroyer(input_sets) == "a _ c _ e f g h i j k l m n o p q r s t u v w x y z"
    input_sets = ({'b', 'b'}, {'C', 'm', 'f'})
    assert destroyer(input_sets) == "a _ c d e _ g h i j k l _ n o p q r s t u v w x y z"
