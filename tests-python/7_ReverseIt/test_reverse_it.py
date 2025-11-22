def reverse_it(data):
    result = data
    if (isinstance(data, str)):
        result = ''.join(reversed(data))
    if ((isinstance(data, float)) and not (isinstance(data, bool))):
        result = float(''.join(reversed(f'{data}')))
    if ((isinstance(data, int)) and not (isinstance(data, bool))):
        result = int(''.join(reversed(f'{data}')))
        
    return result

    # if type(data) == str: return data[::-1]
    # elif type(data) == int: return int(str(data)[::-1])
    # elif type(data) == float: return float(str(data)[::-1])
    # else: return data

def test_reverse_it():
    assert reverse_it('Hello') == "olleH"
    assert reverse_it(314159) == 951413
    assert reverse_it("314159") == "951413"
    assert reverse_it([]) == []
    assert reverse_it({}) == {}
    assert reverse_it(True) == True
    assert reverse_it([1, 2, 3]) == [1, 2, 3]