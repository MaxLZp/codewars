def is_dd(n):
    for i in range(1,10):
        if i == str(n).count(str(i)):
            return True
    return False

# My
# def is_dd(n):
#     map = {}
#     ns = f'{n}'
#     for c in ns:
#         if c not in map:
#             map[c] = 0
#         map[c] += 1
    
#     for k,m in map.items():
#         if int(k) == m:
#             return True
#     return False

def test_numbers_with_d_occurences_of_digit_d():
    assert is_dd(664444309) == True
    assert is_dd(122) == True
    assert is_dd(30313) == True
    assert is_dd(5023011) == False
    assert is_dd(9081231) == False