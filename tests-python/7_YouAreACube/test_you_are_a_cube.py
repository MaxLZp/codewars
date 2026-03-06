def you_are_a_cube(cube):
    return cube == round(cube ** (1/3)) ** 3

def test_you_are_a_cube():
    assert you_are_a_cube(27) == True
    assert you_are_a_cube(1) == True
    assert you_are_a_cube(2) == False
    assert you_are_a_cube(99) == False
    assert you_are_a_cube(64) == True
