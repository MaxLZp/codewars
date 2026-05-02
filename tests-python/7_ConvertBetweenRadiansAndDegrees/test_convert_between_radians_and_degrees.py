import math

def degrees(rad):
    return f'{round((rad * 180 / math.pi), 2):g}deg'

def radians(deg):
    return f'{round((deg * math.pi / 180), 2):g}rad'

math.degrees = degrees
math.radians = radians

def test_convert_between_radians_and_degrees():
    assert math.degrees(math.pi) == '180deg'
    assert math.radians(180) == '3.14rad'
    
    assert math.degrees(14.124866051562833) == '809.3deg'