def uncensor(infected, discovered):
    result = infected
    for c in discovered:
        result = result.replace('*', c, 1)
    return result


def test_ceasared_string():
    data = [
        ('*h*s *s v*ry *tr*ng*', 'Tiiesae', 'This is very strange'),
        ('A**Z*N*', 'MAIG', 'AMAZING'),
        ('xyz', '', 'xyz'),
        ('', '', ''),
        ('***', 'abc', 'abc')
    ]
    
    for infected, discovered, result in data:
        assert uncensor(infected, discovered) == result