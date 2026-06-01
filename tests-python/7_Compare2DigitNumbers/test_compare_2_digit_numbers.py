def compare(a, b):
    result = 0
    bs = f'{b}'
    for n in f'{a}':
        if n in bs:
            result += 1
            bs = bs.replace(n, '', 1)
    
    return f'{result * 50}%'


def test_compare_2_digit_numbers():
    tests = [
        (10, 11, "50%"),
        (11, 10, "50%"),
        (33, 33, "100%"),
        (45, 45, "100%"),
        (29, 92, "100%"),
        (14, 24, "50%"),
        (56, 57, "50%"),
        (38, 84, "50%"),
        (10, 22, "0%"),
        
        (11, 44, "0%"),
        (98, 70, "0%"),
        (66, 16, "50%"),
        (98, 88, "50%"),
        (78, 58, "50%"),
        (47, 56, "0%")
    ]
    
    for a, b, expected in tests:
        assert compare(a, b) == expected

