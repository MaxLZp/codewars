class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

       
class Circle:
    def __init__(self, center: Point, radius: int):
        self.center = center
        self.radius = radius


def distance_between_circles(a, b):
    dist = ((a.center.x - b.center.x) ** 2 + (a.center.y - b.center.y) ** 2) ** 0.5
    # return 0 if dist < a.radius + b.radius else dist - (a.radius + b.radius)
    return max(0, dist - (a.radius + b.radius))


def test_geometry_basics_distance_between_circles_in_2D():
    
    assert round(distance_between_circles(
        Circle(Point(10, 60), 11),
        Circle(Point(40, 20), 7)
        ), 6) == 32
    
    
    assert round(distance_between_circles(
        Circle(Point(10, 60), 40),
        Circle(Point(40, 20), 40)
        ), 6) == 0
    
    
    assert round(distance_between_circles(
        Circle(Point(100, 100), 50),
        Circle(Point(102, 110), 10)
        ), 6) == 0
  