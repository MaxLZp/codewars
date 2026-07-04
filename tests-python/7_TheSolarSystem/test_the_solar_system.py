def is_planet_mnemonic_correct(solar_system, mnemonic):
    # m = [m[0] if m else '' for m in mnemonic.split(' ')]
    # m = [m[:1] for m in mnemonic.split(' ')]
    m = [m[0] for m in mnemonic.split()]
    s = [s[0] for s in solar_system if s != 'Asteroid']
    return ''.join(m) == ''.join(s)


def test_the_solar_system():
    assert is_planet_mnemonic_correct(["Earth", "Jupiter", "Asteroid", "Asteroid", "Mercury", "Asteroid", "Saturn"], "Even Jaguars Make Spaghetti") == True
    assert is_planet_mnemonic_correct([], "Hello") == False
    assert is_planet_mnemonic_correct([], "") == True
    assert is_planet_mnemonic_correct(["Asteroid", "Asteroid", "Asteroid", "Asteroid", "Asteroid", "Asteroid"], "") == True
    assert is_planet_mnemonic_correct(["Mars", "Jupiter"], "My Shoes") == False
    assert is_planet_mnemonic_correct(["Mercury", "Asteroid", "Saturn"], "My Shoes") == True
