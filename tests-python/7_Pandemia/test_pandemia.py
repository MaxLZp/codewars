def infected(s):
    _infected = 0
    _total = 0
    for cont in s.split('X'):
        _infected += len(cont) if '1' in cont else 0
        _total += len(cont)
    
    return 0 if _total == 0 else 100 * _infected / (_total)
    

   
def test_pandemia():
    import pytest
    fixeds = [
        ("01000000X000X011X0X",73.33333333333333),
        ("01X000X010X011XX", 72.72727272727273),
        ("XXXXX", 0),
        ("00000000X00X0000", 0),
        ("0000000010", 100),
        ("000001XXXX0010X1X00010", 100),
        ("X00X000000X10X0100",42.857142857142854),
    ]
    for inp,exp in fixeds:
        assert infected(inp) == pytest.approx(exp, abs=1e-3)
     