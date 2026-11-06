def is_very_even_number(n):
    _sum = sum(int(n) for n in f'{n}')
    return _sum % 2 == 0 if _sum < 10 else is_very_even_number(_sum)

        
def test_has_valid_hk_phone_number():
    sample_tests = [
        [0,    True ],
        [4,    True ],
        [12,   False],
        [222,  True ],
        [5,    False],
        [45,   False],
        [4554, False],
        [1234, False],
        [88,   False],
        [24,   True ],
        [400000220, True]
    ]
            
    for n, expected in sample_tests:
        assert is_very_even_number(n) == expected