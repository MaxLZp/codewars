def bald(s):
    hairs = s.count('/')
    
    _type = 'Clean!'
    if hairs > 5: _type = 'Hobo!'
    if hairs >= 3 and hairs <= 5: _type = 'Careless!'
    if hairs == 2: _type = 'Homer!'
    if hairs == 1: _type = 'Unicorn!'
    
    return ['-'*len(s), _type]


def test_slaphead():
    tests = (
        (["----------", "Unicorn!"], "/---------"),
        (["--------", "Homer!"], "/-----/-"),
        (["---------------", "Careless!"], "--/--/---/-/---"),
    )
    
    for exp, inp in tests:
        assert bald(inp) == exp
    