def get_new_notes(salary,bills):
    return max(0, (salary - sum(bills)) // 5)
  
def test_negation_of_a_value():
    assert get_new_notes(2000, [500, 160, 400]) == 188
    assert get_new_notes(1260, [500, 50, 100]) == 122
    assert get_new_notes(3600, [1800, 350, 460, 500, 15]) == 95
    assert get_new_notes(1995, [1500, 19, 44]) == 86
    assert get_new_notes(10000, [1800, 500, 1200, 655, 150]) == 1139
    assert get_new_notes(2300, [590, 1500, 45, 655, 150]) == 0
    assert get_new_notes(5300, [1190, 1010, 1045, 55, 10, 19, 55]) == 383
    assert get_new_notes(2000, [500, 495, 100, 900]) == 1
    assert get_new_notes(2000, [500, 496, 100, 900]) == 0
    assert get_new_notes(2000, [500, 494, 100, 900]) == 1
