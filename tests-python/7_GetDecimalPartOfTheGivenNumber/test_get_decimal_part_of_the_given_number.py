import pytest

def get_decimal(n):
    return abs(n) % 1
  
def test_get_decimal_part_of_the_given_number():
    assert get_decimal(10) == pytest.approx(0)
    assert get_decimal(1.2) == pytest.approx(0.2)
    assert get_decimal(-1.2) == pytest.approx(0.2)
   