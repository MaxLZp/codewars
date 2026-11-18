def solution(pairs):
    return ','.join(f'{k} = {pairs.get(k)}' for k in pairs.keys())

  
def test_building_a_string_from_a_hash():
    assert solution({'a': 1, 'b': 2}) == 'a = 1,b = 2'
    assert solution({'a': 'b', 'b': 'a'}) == 'a = b,b = a'
    assert solution({0: 'a', 'b': 2}) == '0 = a,b = 2'
    assert solution({'b': 1, 'c': 2, 'e': 3}) == 'b = 1,c = 2,e = 3'
    assert solution({}) == ''