def round_and_round(n, a, b):
    # return (a + b) % n or n if b >= 0 else n - abs(a + b) % n
    return (a + b) % n or n
    
def test_simple_fun296_round_and_round():
    test_cases = [
        
    #       n      a      b   result
        
        (   6,     2,    -5,      3),
        (   5,     1,     3,      4),
        (   3,     2,     7,      3),
        ( 100,     1,    -1,    100),
        ( 100,    54,   100,     54),
        (  97,    37,   -92,     42),
        (  99,    41,     0,     41),
        (  35,    34,     1,     35),
        (   3,     2,  -100,      1),
        (   1,     1,  -100,      1),
        ( 100,     1,-10000,      1),
        ( 333,   222,   111,    333),

    ]
    
    for n, a, b, expected in test_cases:
        assert round_and_round(n, a, b) == expected
