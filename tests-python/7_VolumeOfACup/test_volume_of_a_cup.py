from math import pi 

def cup_volume(d1, d2, height):
    result = ((d1 / 2)**2 + d1*d2 / 4 + (d2 / 2)**2) * height * pi / 3
    return round(result, 2)

def test_volume_of_a_cup():
    assert cup_volume(1, 1, 1) == round (0.25 * pi, 2)
    assert cup_volume(10, 8, 9) == round (183 * pi, 2)
    assert cup_volume(1000, 1000, 1000) == round (2.5e8 * pi, 2)
    assert cup_volume(12, 123, 1) == round (1395.75 * pi, 2)
    assert cup_volume(6, 12, 33) == round (693 * pi, 2)
 
