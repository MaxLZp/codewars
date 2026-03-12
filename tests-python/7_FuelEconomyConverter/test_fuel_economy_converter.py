def mpg2lp100km(mpg):
    # l = 3.785411784
    # km = 1.609344 * mpg
    # return round(l * 100 / km, 2)

    # same but oneliner
    return round(3.785411784 * 100 / (1.609344 * mpg), 2)
    
def lp100km2mpg(lp100km):
    # g = lp100km / 3.785411784
    # m = 100 / 1.609344
    # return round(m / g, 2)

    return round(3.785411784 * 100 / (1.609344 * lp100km), 2)

def test_fuel_economy_converter():
    assert mpg2lp100km(42) == 5.6
    assert lp100km2mpg(9) == 26.13
