class Quark(object):
    def __init__(self, color, flavor):
        self.color = color
        self.flavor = flavor
        self.baryon_number = 1.0 / 3
        
    def interact(self, other: 'Quark') -> None:
        self.color, other.color = other.color, self.color


def test_thinkful_object_drills_quarks():
    q1 = Quark("red", "up")
    q2 = Quark("blue", "strange")
    
    assert q1.color == "red"
    assert q2.flavor == "strange"

    assert q2.baryon_number == 1.0 / 3

    q1.interact(q2)
    assert q1.color == "blue"
    assert q2.color == "red"