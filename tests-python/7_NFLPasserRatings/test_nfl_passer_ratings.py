def passer_rating(att, yds, comp, td, ints):
    norm = lambda val: 0 if val < 0 else min(val, 2.375)
    
    A = norm(((comp / att) - .3) * 5) 
    B = norm(((yds / att) - 3) * .25)
    C = norm((td / att) * 20)
    D = norm(2.375 - ((ints / att) * 25))
    
    return round(((A + B + C + D) / 6) * 100, 1)
  
def test_nfl_passer_ratings():
    assert passer_rating(432, 3554, 291, 28, 2) == 112.2
    assert passer_rating(5, 76, 4, 1, 0) == 158.3
    assert passer_rating(48, 192, 19, 2, 3) == 39.6
    assert passer_rating(1, 2, 1, 1, 0) == 118.8
    assert passer_rating(34, 172, 20, 1, 1) == 69.7
    assert passer_rating(10, 17, 2, 0, 1) == 0.0
