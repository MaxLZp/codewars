import math

def calculate_scrap(scraps, number_of_robots):
    result = 50 * number_of_robots
    for scrap in scraps:
        result *= 100 / (100 - scrap)
        
    return math.ceil(result)

def test_manage_the_robot_factory_day1():
    assert calculate_scrap([10], 90) == 5000
    assert calculate_scrap([20, 10], 55) == 3820
    