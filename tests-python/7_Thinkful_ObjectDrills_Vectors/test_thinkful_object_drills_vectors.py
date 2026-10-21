class Vector(object):
    
    def __init__(self, x, y):
          self.x = x
          self.y = y
          
    def add(self, other):
        return Vector(self.x + other.x, self.y + other.y)
        

def test_thinkful_object_drills_vectors():

        assert Vector(3, 4).x ==3
        
        assert Vector(3, 4).y ==4
        assert hasattr(Vector(3, 4), "add")
        assert isinstance(Vector(3, 4).add(Vector(1, 2)), Vector)
        
        assert Vector(3, 4).add(Vector(1, 2)).x ==4
        
        assert Vector(3, 4).add(Vector(1, 2)).y ==6
  
