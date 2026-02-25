import math 

def calculate_time(p1, p2):
    p1 = [abs(p) for p in p1]
    p2 = [abs(p) for p in p2]
    
    speed = math.hypot(p1[0] - p2[0], p1[1] - p2[1]) / 5
    
    return round(math.hypot(p2[0], p2[1]) / speed, 3)
  
def test_approaching_enemies():
        calculate_time([100, 100], [90, 90]) == 45
        calculate_time([-90, 0], [-80, 0]) == 40
        calculate_time([50, -100], [47.5, -95]) == 95