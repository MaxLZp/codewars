def hypotenuse(a, b):
    return (a**2 + b**2) ** 0.5

def leg(c, a):
    return (c**2 - a**2) ** 0.5
  
def test_all_star_code_challenge24():
    hypotenuse(4, 3) == 5
    leg(5, 3) == 4