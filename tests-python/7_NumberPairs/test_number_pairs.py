def get_larger_numbers(a, b):
    result = []
    for i in range(0, len(a)):
        result.append(max(a[i], b[i]))
        
    return result

# def get_larger_numbers(a, b):
#     return [max(x, y) for x, y in zip(a, b)]

def test_number_pairs():
    a = [13, 64, 15, 17, 88]
    b = [23, 14, 53, 17, 80]
    assert get_larger_numbers(a, b) == [23, 64, 53, 17, 88]
    
    a = [34, -64, 15, 17, 88]
    b = [23, 14, 53, 17, 80]
    assert get_larger_numbers(a, b) == [34, 14, 53, 17, 88]
