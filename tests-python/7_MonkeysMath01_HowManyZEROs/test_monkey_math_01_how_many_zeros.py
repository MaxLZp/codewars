def countzero(st):
    map = {
        1: ['a', 'b', 'd', 'e', 'g', 'o', 'p', 'q', '0', '6', '9', 'D', 'O', 'P', 'Q', 'R', '()'],
        2: ['%', '&', 'B', '8']
    }
    result = 0
    for k in map.keys():
        for c in map[k]:
            result += st.count(c) * k
    
    return result

  
def test_monkey_math_01_how_many_zeros():
    assert countzero("") == 0
    assert countzero("0") == 1
    assert countzero("0oO0oO") == 6
    assert countzero("1234567890") == 5
    assert countzero("abcdefghijklmnopqrstuvwxyz") == 8
    
    assert countzero("()") == 1   # '() is a "0",in monkey eyes.  ;-)'
    assert countzero("E") == 0    # 'e is "0",but E is not'
    assert countzero("aA") == 1   # 'a is "0",but A is not'
    assert countzero("BRA") == 3  # 'B and R have 3 "0", A is not a "0"'
    assert countzero("%&") == 4   # 'Non-alphanumerical characters can have "0"s too!'
